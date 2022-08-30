const menuButton = document.querySelector('.menuButton');
const closeMenuButton = document.querySelector('.closeMenuButton');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', function () {
	nav.classList.add('navToggle');
});

closeMenuButton.addEventListener('click', function () {
	nav.classList.remove('navToggle');
});