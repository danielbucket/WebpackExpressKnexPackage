import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello, ', 'THis is a basic Webpack Compiled Express.js/Knex.js server render with a built in database.'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
