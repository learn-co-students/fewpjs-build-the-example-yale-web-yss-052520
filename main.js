// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const warning = document.querySelector("div#modal")
warning.classList.add("hidden")

document.addEventListener('DOMContentLoaded', () => {
  const allHearts = document.querySelectorAll("span.like-glyph")
  allHearts.forEach(heart =>{
    heart.addEventListener("click", () => {
      mimicServerCall()
      .then(function(response) {
        if (heart.innerText == FULL_HEART){
          heart.innerText = EMPTY_HEART
          heart.classList.remove("activated-heart")
        }
        else {
          heart.innerText = FULL_HEART
          heart.classList.add("activated-heart")
        }
      })
      .catch(error =>{
        warning.classList.remove('hidden')
        warning.children[1].innerText = error
        setTimeout(() => warning.classList.add("hidden"), 5000)
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
