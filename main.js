// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let hearts = document.querySelectorAll(".like")

for (heart of hearts) {
  heart.addEventListener("click", like)
}

heartSign = {
  '♡': '♥',
  '♥': '♡'
}

heartColor = {
  '': 'red',
  'red': ''
}

function like(event) {
  let heart = event.target
  mimicServerCall("fakeURL")
  .then(function(serverMessage){
    heart.innerText = heartSign[heart.innerText]
    heart.style.color = heartColor[heart.style.color]
  }) 
  .catch(function(error) {
    errorModal = document.getElementById("modal")
    errorModal.className = ""
    errorModal.children[0].innerText = 'Server did not respond :('
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
