const inputEl = document.querySelector('#validation-input');


inputEl.addEventListener('blur', event => {
    const expectedLength = parseInt(event.currentTarget.dataset.length);
    const enteredValue = event.currentTarget.value;


    if (expectedLength === enteredValue.length) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid')
    } else { inputEl.classList.add('invalid'); }

});
