// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', () => {
  const errorDiv = document.getElementById('modal')
  const errorPTag = document.getElementById('modal-message')
  errorDiv.className = 'hidden'
  const posts = document.querySelectorAll('article.media-post')
  
  function hideError() {
    errorDiv.className = 'hidden'
  }
  
  posts.forEach(post => {
    const likeBtn = post.querySelector('span')
    const heart = likeBtn.innerText
    likeBtn.addEventListener('click', () => {
      mimicServerCall()
      .then(() => {
        if (heart == EMPTY_HEART) {
          likeBtn.innerText = FULL_HEART
          likeBtn.className = 'activated-heart'
        } else {
          likeBtn.innerText = EMPTY_HEART
          likeBtn.className = 'like-glyph'
        }
      })
      .catch(err => {
        errorPTag.innerText = err
        errorDiv.className = ''
        setTimeout(hideError(), 5000)
      })
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
