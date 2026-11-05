const overlay = document.querySelector('.overlay');
const apriModale = document.querySelector('#apriModale');
const chiudiModale = document.querySelector('.chiudiModale');
const myForm = document.querySelector('form');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const date = document.querySelector('#date');
const message = document.querySelector('#message')
const recontact = document.querySelector('#recontact')

apriModale.addEventListener('click', (e) => {
	e.preventDefault();
	overlay.style.display = 'block';
});

chiudiModale.addEventListener('click', (e) => {
	e.preventDefault();
	overlay.style.display = 'none';
});

overlay.addEventListener('click', (e) => {
	if(e.target === overlay)
	overlay.style.display = 'none';
});

myForm.addEventListener('submit', (e) => {
	e.preventDefault();
	window.location.href = 'grazie.html';
});