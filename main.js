// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const allHearts = document.getElementsByClassName("like")

// takes in parameter e, which is the node event happend on
function changeLike(e) {
  const likeElement = e.target 
  mimicServerCall("http://mimicServer.example.com")
  .then(function(response) {
    if (likeElement.innerText == FULL_HEART) {
      likeElement.innerText = EMPTY_HEART 
      likeElement.className = "" 
    }
    else {
      likeElement.innerText = FULL_HEART 
      likeElement.className = "activated-heart"
    }
    
  })
  .catch(function(error) {
    document.getElementById("modal").className = "notHidden"
  })
}



// Use for..of with HTMLCollection
// Second argument is the function
for (const post of allHearts) {
  post.addEventListener("click", changeLike)
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
