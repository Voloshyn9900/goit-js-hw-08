const throttle = require('lodash.throttle');

const refs = {
  feedbackFormEl: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('input[name="email"]'),
  messageTextarea: document.querySelector('textarea[name="message"]'),
};

const feedback = {};

const localStorageKey = 'feedback-form-state';
const localStorageValue = localStorage.getItem(localStorageKey);

const parseJson = JSON.parse(localStorageValue);

document.addEventListener('DOMContentLoaded', defaultFormGet);
refs.feedbackFormEl.addEventListener('input', throttle(feedbackFormSet, 1000));
document.addEventListener('submit', formSubmit);

function defaultFormGet(e) {
  // console.log('parseJson', parseJson);
  try {
    feedback[`email`] = parseJson[`email`];
    feedback[`message`] = parseJson[`message`];
    if (parseJson[`email`]) {
      refs.emailInput.value = parseJson[`email`];
    }
    if (parseJson[`message`]) {
      refs.messageTextarea.value = parseJson[`message`];
    }
  } catch (error) {
    console.log('localStorage пустой');
  }
}

function feedbackFormSet(e) {
  switch (e.target.name) {
    case 'email':
      // Можно записать сразу в localStorage
      feedback[`email`] = e.target.value;
      break;
    case 'message':
      // Можно записать сразу в localStorage
      feedback[`message`] = e.target.value;
      break;
    default:
      break;
  }
  // console.log(feedback);
  localStorage.setItem(localStorageKey, JSON.stringify(feedback));
}

function formSubmit(e) {
  e.preventDefault();
  let isEmpty = JSON.stringify(feedback) === '{}';
  if (!isEmpty) {
    console.log('Конечные данные ', feedback);
  }
  refs.emailInput.value = null;
  refs.messageTextarea.value = null;
  // Можно удалить все из используя localStorage clear
  localStorage.removeItem(localStorageKey);

  // Также можно почистить обЪект.
  Object.keys(feedback).forEach(key => delete feedback[key]);
}
