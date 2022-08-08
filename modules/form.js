/**
 * helper function for creating any input element
 */
function inputField(id, type, placeHolder = '', clss, value = '') {
  const input = document.createElement('input');
  input.setAttribute('id', id);
  input.setAttribute('type', type);
  input.setAttribute('placeholder', placeHolder);
  input.setAttribute('class', clss);
  input.setAttribute('value', value);
  input.required = true;

  return input;
}

/**
 *Function for creating a form
 */
function createForm() {
  const form = document.createElement('form');
  form.id = 'book-form';
  form.setAttribute('action', '#');

  const formTitle = document.createElement('h2');
  form.appendChild(formTitle);
  formTitle.classList.add('form-title');
  formTitle.innerText = 'Add a new book';

  const ul = document.createElement('ul');
  form.appendChild(ul);

  const liTitle = document.createElement('li');
  const liAuthor = document.createElement('li');
  const liAdd = document.createElement('li');
  ul.appendChild(liTitle);
  ul.appendChild(liAuthor);
  ul.appendChild(liAdd);

  liTitle.appendChild(inputField('title', 'text', 'Title', 'space-inputs'));
  liAuthor.appendChild(inputField('author', 'text', 'Author', 'space-inputs'));

  liAdd.innerHTML = '<input type="submit" value="Add" class="add-btn" />';

  return form.innerHTML;
}

const generateForm = () => `${createForm()}`;
export default generateForm;
