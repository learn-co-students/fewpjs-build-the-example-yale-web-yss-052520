// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function qs(descriptor) {
  return document.querySelector(descriptor)
}

function qsa(descriptor) {
  return document.querySelectorAll(descriptor)
}

function ce(element) {
  return document.createElement(element)
}

function toggle_heart(liker) {
  if (liker.innerText == EMPTY_HEART) {
    liker.innerText = FULL_HEART
  } else {
    liker.innerText = EMPTY_HEART
  }
}

const errorbanner = qs('#modal')
const likers = qsa('.like .like-glyph')

for (const liker of likers) {
  liker.addEventListener('click', () => {
    mimicServerCall()
    .then(() => {
      liker.classList.toggle("activated-heart")
      toggle_heart(liker)
    })
    .catch(error => {
      errorbanner.classList.remove("hidden")
      errorbanner.querySelector("#modal-message").innerText = error
      setTimeout(() => {
        errorbanner.classList.add("hidden")
      }, 5000)
    })
  })
}


  

  



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
