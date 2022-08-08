import formatTime from './modules/date.js';
import generateContact from './modules/contact.js';

const main = document.querySelector('.main-display');

// display time
const displayDate = document.querySelector('.display-date');
displayDate.innerHTML = formatTime();

// Navigation
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link) => {
  link.addEventListener('click', ({ target: { id } }) => {
    console.log();
    if (id === 'list') {
      main.innerHTML = '';
      return;
    }

    if (id === 'add-new') {
      main.innerHTML = '';
      return;
    }

    if (id === 'contact') {
      main.innerHTML = '';

      const contactContainer = document.createElement('div');
      contactContainer.classList.add('contact-container');
      contactContainer.innerHTML = generateContact();
      main.appendChild(contactContainer);
      return;
    }
  });
});
