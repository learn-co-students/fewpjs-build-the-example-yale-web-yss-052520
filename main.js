// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let heartFills =  {
  "♡": "♥",
  "♥": "♡"
}

let heartColors = {
  "red" : "",
  "": "red"
}

let likeHearts = document.querySelectorAll(".like")
let modal = document.querySelector('.hidden')

function likes(event) {
  let heart = event.target
  mimicServerCall("someUrl")
    .then(function(serverMessage){
      heart.innerText = heartFills[heart.innerText];
      heart.style.color = heartColors[heart.style.color];
    })
    .catch(function(error) {
      document.getElementById("modal").className = ""
    })  
}

for (let one of likeHearts) {
  one.addEventListener("click", likes)
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
