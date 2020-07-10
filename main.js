// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hearts = document.querySelectorAll('span.like-glyph')

hearts.forEach(function(heart){
  heart.addEventListener('click', function(){
    const targetHeart = event.target 
    console.log(targetHeart) 

    mimicServerCall() 
   .then(() => {
      if (targetHeart.innerText == EMPTY_HEART){
        targetHeart.innerText = FULL_HEART 
        targetHeart.className = 'like-glyph activated-heart'
      } else { 
        targetHeart.innerText = EMPTY_HEART
        targetHeart.className = 'like-glyph' 
      } 
    })
   .catch(() => {
    const errorModal = document.querySelector('div#modal')
    errorModal.className = ""  
    setTimeout(() => {
      errorModal.className = "hidden"  
    }, 5000) 
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
