const _ = require('lodash');

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'World'], ' ');
  element.id = 'hola';
  return element;
};

document.body.appendChild(component());
