// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let heartFull = false

// document.addEventListener("DOMContentLoaded", () => {
  const modal = qs("div#modal")
  modal.className = "hidden"

  let likes = document.querySelectorAll("li.like")
  likes.forEach(like => registerLike(like))

function qs(element){
  return document.querySelector(element)
}



function registerLike(likeElement){
  likeElement.addEventListener('click', () => {
    mimicServerCall()
    // .then(res => res.json())
    // .then(res => console.log(res))
    .then(() => {
      if(heartFull){
        likeElement.innerText = `Like! ${FULL_HEART}`
        likeElement.className = "activated-heart"
      }else{
        likeElement.innerText = `Like! ${EMPTY_HEART}`
        likeElement.className = "like-glyph"
      }
      heartFull = !heartFull
    })
    .catch(error => {
      
      // modal.querySelector('h2').innerText = error
      modal.className = ""
      setTimeout(() => modal.className = 'hidden', 5000)
    })
  })
}

// })


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
