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
