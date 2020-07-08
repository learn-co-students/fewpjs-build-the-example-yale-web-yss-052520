// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let elements = document.getElementsByClassName("like");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', my_func);
}

function my_func(e){
  if(e.target.innerText == EMPTY_HEART){
  mimicServerCall().then(
    res => check_result(res,e)
  ).catch(function(error){
    // console.log("asdf")
    const display = document.querySelector('.hidden')
    display.classList.remove("hidden")
    document.querySelector('#modal-message').innerText = error
    setTimeout(function(){ display.classList.add("hidden"); }, 5000);
  })}
  if (e.target.innerText == FULL_HEART){
    e.target.innerText = EMPTY_HEART
    e.target.classList.remove("activated-heart")
  }
}
function check_result(res,e){
  if (res == "Pretend remote server notified of action!"){
    
      e.target.innerText = FULL_HEART
      e.target.classList.add("activated-heart")
    
    

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
