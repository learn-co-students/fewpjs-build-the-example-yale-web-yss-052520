// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let hearts = document.querySelectorAll('span.like-glyph')

hearts.forEach(heart => {
    heart.addEventListener("click", () => {
        if (heart.innerHTML === FULL_HEART) {
            heart.innerHTML = EMPTY_HEART
            heart.classList.remove("activated-heart")
        } else if (heart.innerHTML === EMPTY_HEART) {
            mimicServerCall().then( () => {
              heart.innerHTML = FULL_HEART
              heart.classList.add("activated-heart")
            })
            .catch((error) => {
              document.querySelector('#modal').classList.remove('hidden')
              document.querySelector('#modal p#modal-message').innerHTML = error.message
              setTimeout(function(){ 
                document.querySelector('#modal').className = "hidden" 
              }, 5000);
            })
            // heart.innerHTML = FULL_HEART
        } 
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
