$(document).ready(() => {
    $(".chat-btn").click(() => {
        $(".chat-box").slideToggle("slow")
    })
})

let changeIcon = function (icon){

    icon.classList.toggle('fa-times-circle')
}

// Services
let changeIcon = function (icon){

  icon.classList.toggle('fa-times-circle')
}

// Button to the top of the page
let returnButton = document.getElementById('returnBtn');

function onScroll() {
  if (scrollY > 500) {
    returnButton.classList.remove('hideBtn');
  } else {
    returnButton.classList.add('hideBtn');
  }

  // Social Bar
  let socialBar = document.getElementById("social_bar");
  if (scrollY >= 400) {
    socialBar.style.display = "none";
  } else {
    socialBar.style.display = "block";
  }
}

// ScrollReveal API
ScrollReveal({
  origin: 'left',
  distance: '30px',
  duration: 700,
}).reveal(`
  #header`);