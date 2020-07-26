// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let likeBtns = document.querySelectorAll('.like')
likeBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    mimicServerCall()
      .then( res => {
        if (btn.className == 'like') {
          btn.innerText = `Like! ${FULL_HEART}`
          btn.className = 'activated-heart'
        } else if (btn.className == 'activated-heart') {
          btn.innerText = `Like! ${EMPTY_HEART}`
          btn.className = 'like'
        }
      })
        .catch( error => {
          modal = document.querySelector('#modal')
          modal.className = ""
          modal.innerText = "Random server error. Try again."
          setTimeout(function(){ modal.className = "hidden" }, 5000)
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
