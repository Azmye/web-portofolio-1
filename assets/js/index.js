let navbar = document.querySelector('.nav-links');
let linksBtn = document.querySelector('.links-btn');

linksBtn.addEventListener('click', () => {
  navbar.classList.toggle('navbar-expand');
});
