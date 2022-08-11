import './style.css';

// DOM lifecycle

console.log('helleo');

document.addEventListener('DOMContentLoaded', function (e) {
  console.log(e);
  console.log('asdfadf');
});
let node = document.createElement('h1');
node.innerText = 'hell';
document.querySelector('body').appendChild(node);
document
  .querySelector('body')
  .insertAdjacentHTML('beforeend', `<h1>Hello world</h1>`);

window.addEventListener('load', function (e) {
  console.log(e);
});

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  // console.log(e);
  e.returnValue = 'Message is showing @catzilla';
});
