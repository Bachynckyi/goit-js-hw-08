import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

const LOCALSTORAGE_KEY = "feedback-form-state";

onUpdate();

let formData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

function onInput(event) {
    formData[event.target.name] = event.target.value
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
};

function onSubmit(event) {
    event.preventDefault();
    if (form.elements.email.value === "" || form.elements.message.value === "") {
        alert("Поля не могут быть пустыми");
    }
    else {
        console.log(formData);
    };
    event.currentTarget.reset();
    localStorage.clear();
    formData = {};
};


function onUpdate() {
    const savedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (savedData) {
        form.elements.email.value = savedData.email || '';
        form.elements.message.value = savedData.message || '';
    };
};


