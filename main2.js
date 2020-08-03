// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let colorStates = {
  "red":"",
  "":"red"
}



// Your JavaScript code goes here!

  let modal = document.querySelector('div#modal h2')
  modal.className = 'hidden'

  let likes = document.querySelectorAll('.like')

  for (let like of likes) {
    like.addEventListener('click', likeCallback())
  } 

  function likeCallback(e) {
  let heart = e.target
    if (heart == EMPTY_HEART) { 
    mimicServerCall()
    .then(() => {
      modal.className = ""
    })
    .catch(error => error.message)
    setTimeout(modal.className = 'hidden', 5)
    .then( () => { 
      like.innerText = FULL_HEART
      like.className = 'activated-heart'
    })
  } else {
    mimicServerCall()
    .then( () => { 
      like.innerText = EMPTY_HEART
      like.className = ''
    })
  }
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
