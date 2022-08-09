class Book {
  constructor(title, author, id = Date.now()) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

const saveToLocal = (title, author) => {
  let dataOnLocal = JSON.parse(window.localStorage.getItem('books'));
  const book = new Book(title, author);
  if (dataOnLocal) {
    dataOnLocal = [...dataOnLocal, book];
    window.localStorage.setItem('books', JSON.stringify(dataOnLocal));
  } else {
    window.localStorage.setItem('books', JSON.stringify([book]));
  }
};

export default saveToLocal;
