// const form = document.querySelector(".feedback-form");
// const localStorageKey = "feedback-form-state";

// form.elements.message.value = localStorage.getItem(localStorageKey) ?? "";

// form.addEventListener("input", (evt) => {
//   localStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   localStorage.removeItem(localStorageKey);
//   form.reset();
// });


// import throttle from "lodash.throttle";

// const form = document.querySelector('.feedback-form');
// const emailInput = form.querySelector('input[name="email"]');
// const messageInput = form.querySelector('textarea[name="message"]');

// form.addEventListener("input", throttle(saveFormData, 500));
// form.addEventListener("submit", onSubmit);

// function saveFormData(){
//   const formData = {
//     email: emailInput.value,
//     message: messageInput.value
//   }
//   localStorage.setItem("feedback-form-state", JSON.stringify(formData));
// }

// function onSubmit(event) {
//   event.preventDefault();
//   emailInput.value = '';
//   messageInput.value = '';
//   localStorage.removeItem("feedback-form-state");
//   console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
// }

// function dataLocalStorage() {
//   const storedData = localStorage.getItem("feedback-form-state");
//   if (storedData !== null) {
//     const formData = JSON.parse(storedData);
//       emailInput.value = formData.email;
//   messageInput.value = formData.message;
//   }
// }


import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener("input", throttle(onInputData, 500));
formEl.addEventListener("submit", onSubmit);

const input = formEl.email;
const texteria = formEl.message;
const STORAGE_KEY = 'feedback-form-state';
let formElements = {};
dataLocalStorage();

function onInputData(event) {

formElements[event.target.name] = event.target.value
localStorage.setItem('STORAGE_KEY', JSON.stringify(formElements));

};

function onSubmit(event) {
  event.preventDefault();
  const { email, message } = event.currentTarget.elements;
 const dataForm = {
        email: email.value,
        message: message.value,
    };
  if (email.value === '' || message.value === '') {
   alert(`Please fill in all the fields!`);
 return formEl;
  }
  
  console.log(dataForm);
  localStorage.removeItem('STORAGE_KEY');
   formEl.reset();

}

function dataLocalStorage() {
  if (JSON.parse(localStorage.getItem('STORAGE_KEY'))) {
    input.value = JSON.parse(localStorage.getItem('STORAGE_KEY')).email;
    texteria.value = JSON.parse(localStorage.getItem('STORAGE_KEY')).message;
  }
}