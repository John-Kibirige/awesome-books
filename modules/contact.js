const createContact = () => {
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('.contact-container');

  const contactTitle = document.createElement('h2');
  contactTitle.classList.add('contact-title');
  contactTitle.innerText = 'Contact Information';
  contactContainer.appendChild(contactTitle);

  const contactDescription = document.createElement('div');
  contactDescription.classList.add('description');
  contactContainer.appendChild(contactDescription);

  const par1 = document.createElement('p');
  par1.innerText = 'Do you have any questions or you just want to say "hello"?';
  contactDescription.appendChild(par1);

  const par2 = document.createElement('p');
  par2.innerText = 'You can reach out to us though!';
  contactDescription.appendChild(par2);

  const ul = document.createElement('ul');
  contactDescription.appendChild(ul);

  const items = [
    'Our e-mail: mail@mail.com',
    'Our Phone-number: 004289231',
    'Our Address: Street-name, 22, 599, city country',
  ];

  items.forEach((item) => {
    const li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
  });

  return `${contactContainer.innerHTML}`;
};

export default createContact;
