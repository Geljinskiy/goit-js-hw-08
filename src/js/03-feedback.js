import { setData, getData, removeData } from './storage';

const email = document.querySelector('input');
const message = document.querySelector('textarea');
const submit = document.querySelector('button');
let storageObj = {};
const LOCAL_FIELDS = 'feedback-form-state';
const throttle = require('lodash/throttle');

getInputs(email);
getInputs(message);

email.addEventListener('input', throttle(input, 500));
message.addEventListener('input', throttle(input, 500));

submit.addEventListener('click', onSubmit);

function onSubmit(ev) {
  ev.preventDefault();

  console.log(storageObj);
  removeData(LOCAL_FIELDS);
  email.value = '';
  message.value = '';
}

function getInputs(input) {
  let parsedData = false;
  try {
    parsedData = JSON.parse(getData(LOCAL_FIELDS))[input.name];
  } catch (error) {}
  if (parsedData) {
    storageObj = JSON.parse(getData(LOCAL_FIELDS));
    input.value = parsedData;
  }
}

function input() {
  console.log(storageObj);
  storageObj[this.name] = this.value;
  setData(LOCAL_FIELDS, JSON.stringify(storageObj));
}
