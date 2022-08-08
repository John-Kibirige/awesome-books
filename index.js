import formatTime from './modules/date.js';
import generateContact from './modules/contact.js';
import generateForm from './modules/form.js';
import saveToLocal from './modules/toLocalStorage.js';
import bookComponent from './modules/book.js';

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
      renderFromLocal();
      return;
    }

    if (id === 'add-new') {
      main.innerHTML = '';
      const form = document.createElement('form');
      form.innerHTML = generateForm();
      main.appendChild(form);

      document.querySelector('.add-btn').addEventListener('click', (e) => {
        e.preventDefault();

        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        console.log('the title and author ', title, author);
        saveToLocal(title, author);
      });
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

const renderFromLocal = () => {
  const displayContainer = document.createElement('div');
  displayContainer.classList.add('disp-container');
  const displayTitle = document.createElement('h2');
  displayTitle.innerText = 'All awesome books';
  displayContainer.appendChild(displayTitle);
  displayTitle.classList.add('disp-title');

  // render all books on local storage
  const fromLocal = JSON.parse(window.localStorage.getItem('books'));
  fromLocal.forEach(({ title, author, id }) => {
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book-container');
    bookContainer.innerHTML = bookComponent(title, author);
    displayContainer.appendChild(bookContainer);

    // second child  that is remove-btn
    bookContainer.children[1].addEventListener('click', (e) => {
      displayContainer.removeChild(bookContainer);

      // update local storage
      let fromLocal = JSON.parse(window.localStorage.getItem('books'));
      fromLocal = fromLocal.filter((book) => book.id !== id);
      localStorage.setItem('books', JSON.stringify(fromLocal));
    });
  });

  main.appendChild(displayContainer);
};
