'use strict';

const body = document.querySelector('body');

function createMessage(className, text) {
  const div = document.createElement('div');

  div.textContent = text;
  div.className = className;

  body.append(div);
}

const logo = body.querySelector('.logo');

let resolveFn;

const promise1 = new Promise((resolve) => {
  resolveFn = resolve;
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(), 3000);
});

promise1.then(() => createMessage('message', 'Promise was resolved!'));

promise2.catch(() =>
  createMessage('message error-message', 'Promise was rejected!'));

logo.addEventListener('click', () => {
  resolveFn();
});
