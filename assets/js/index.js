const hamburgerBtn = document.querySelector('.hamburger-btn');

hamburgerBtn.addEventListener('click', function() {
  this.classList.toggle('active');
});