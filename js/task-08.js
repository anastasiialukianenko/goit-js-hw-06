
const loginFormEl = document.querySelector('.login-form');



loginFormEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    
    const loginEl = document.querySelector('input[type="email"]');
    const passwordEl = document.querySelector('input[type="password"]');
    

   

    if (loginEl.value === '' || passwordEl.value === '') {
        alert('Please fill in all fields');
    } else {
        const { email, password } = event.target.elements;

        const formData = {
        email: loginEl.value,
        password: passwordEl.value
        };

        console.log(formData);

        loginFormEl.reset();
    };
}
