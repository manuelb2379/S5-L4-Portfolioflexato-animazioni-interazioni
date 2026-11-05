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
	overlay.removeAttribute('hidden')
});

chiudiModale.addEventListener('click', (e) => {
	e.preventDefault();
	overlay.setAttribute('hidden', '');
});

overlay.addEventListener('click', (e) => {
	if(e.target === overlay)
	overlay.setAttribute('hidden', '');
});

myForm.addEventListener('submit', (e) => {
	e.preventDefault();
	window.location.href = 'grazie.html';
});