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
  dataOnLocal = [...dataOnLocal, book];
  window.localStorage.setItem('books', JSON.stringify(dataOnLocal));
};

export default saveToLocal;
