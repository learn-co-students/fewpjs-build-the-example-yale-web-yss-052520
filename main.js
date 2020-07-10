// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modalDiv = document.querySelector("#modal")
modalDiv.className = "hidden"

let heartGlyph = document.querySelector("span.like-glyph")

heartGlyph.addEventListener("click", () => {
  mimicServerCall(url="http://mimicServer.example.com", config={})
  .then( () => {
    // debugger
  if (heartGlyph.innerHTML == EMPTY_HEART) {
    heartGlyph.innerHTML = FULL_HEART
    heartGlyph.className = "activated-heart"}
  else
    heartGlyph.innerHTML = EMPTY_HEART
  })
  .catch( error => {
    modalDiv.className = ""
    modalDiv.innerText = error
    setTimeout( () => {modalDiv.className = "hidden"}, 5000)
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
