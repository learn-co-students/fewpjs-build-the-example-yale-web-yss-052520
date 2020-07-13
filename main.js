// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// defining variables
const errorPop = document.querySelector("div#modal")
const hearts = document.querySelectorAll(".like-glyph")

// warning
errorPop.classList.add("hidden")

// likes
document.addEventListener('DOMContentLoaded', () => {
  const hearts = document.querySelectorAll("span.like-glyph")
  hearts.forEach(like =>{
    like.addEventListener("click", () => {
      mimicServerCall()
      .then(function(response) {
        if (like.innerText == FULL_HEART){
          like.innerText = EMPTY_HEART
          like.classList.remove("activated-heart")
        }
        else {
          like.innerText = FULL_HEART
          like.classList.add("activated-heart")
        }
      })
      .catch(error =>{
        errorPop.classList.remove('hidden')
        errorPop.children[1].innerText = error
        setTimeout(() => errorPop.classList.add("hidden"), 5000)
      }) 
    })
  })
})

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
