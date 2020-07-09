// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let changeHeart = function () {
  // console.log(event.target)
  const heartDiv = event.target
  if (heartDiv.classList.contains("activated-heart")) {
    mimicServerCall().then(() => {
      heartDiv.classList.remove("activated-heart")
      heartDiv.innerHTML = EMPTY_HEART
    })
  }
  else {
    mimicServerCall().then(() => {
      heartDiv.classList.add("activated-heart")
      heartDiv.innerHTML = FULL_HEART
    })
  }
}

allHearts = document.querySelectorAll('span.like-glyph')
for (const heart of allHearts) {
  heart.addEventListener("click", changeHeart)
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
