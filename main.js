// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let changeHearts = function() {
  const heart = event.target
  if (heart.classList.innerText == FULL_HEART) {
    mimicServerCall().then(() => {
      heart.className = ""
      heart.innerText = EMPTY_HEART
    })
  }
  else {
    mimicServerCall().then(() => {
      heart.className = "activated-heart"
      heart.innerText = FULL_HEART
    })
  }
}
allHearts = document.getElementsByClassName("like")
for (const heart of allHearts) {
  heart.addEventListener("click", changeHearts)
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
