import formatTime from './modules/date.js';

// display time
const displayDate = document.querySelector('.display-date');
while (true) {
  setTimeout(() => {
    displayDate.innerHTML = formatTime();
  }, 1000);
  break;
}

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link) => {
  link.addEventListener('click', ({ target: { id } }) => {
    console.log();
    if (id === 'list') {
      // remove all others and render list of books
      return;
    }

    if (id === 'add-new') {
      //   remove all others and render only the form
      return;
    }

    if (id === 'contact') {
      //   remove all others and render only form
      return;
    }
  });
});
