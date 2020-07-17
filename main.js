// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.querySelector("div#modal")

// Your JavaScript code goes here!

posts = document.querySelectorAll("article.media-post")
posts.forEach(post => {
  const likeBtn = post.querySelector("li.like")
  const likeGlyph = likeBtn.querySelector("span.like-glyph")
  likeBtn.addEventListener("click", function() {
    mimicServerCall()
    .then(() => {
      if (likeGlyph.className.includes("activated-heart")){
        likeGlyph.innerText = EMPTY_HEART
        likeGlyph.className = "like-glyph"
      } else {
        likeGlyph.innerText = FULL_HEART
        likeGlyph.className += " activated-heart"
      }
    })
    .catch(error => {
      errorModal.className = ""
      errorModal.querySelector("p#modal-message").innterText = error.message
      setTimeout(function() {errorModal.className = "hidden"}, 5000)
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
