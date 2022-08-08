const bookComponent = (title, author) => {
  return `
    <p class="title-author">"${title}" by ${author}</p>
    <button class="remove">Remove</button>
    `;
};

export default bookComponent;
