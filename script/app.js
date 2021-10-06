let email = {},
    password = {},
    signInButton;

const isValidEmailAddress = function(emailAddress) {
    // Basis manier om e-mailadres te checken.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};
const isEmpty = function(fieldValue) {
    return !fieldValue || !fieldValue.length;
};

const isValidPassword = function(password){
    return password.length > 8
}

const addErrors = function(inputObject){
    inputObject.errorMessage.innerText = 'Field is empty';
}

const enableListeners = function(){
    email.input.addEventListener('blur',function(){
        if(isEmpty(email.input.value)){
            addErrors(email)
        }
    })
    password.input.addEventListener('blur',function(){

    })

    signInButton.addEventListener('click',function(){

    })
}

const getDOMElements = function(){
    signInButton = document.querySelector('.js-sign-in-button')

    email.field = document.querySelector('.js-email-field')
    email.input = document.querySelector('.js-email-input')
    email.errorMessage = document.querySelector(".js-email-message")
    
    password.field = document.querySelector('.js-password-field')
    password.input = document.querySelector('.js-password-input')
    password.errorMessage = document.querySelector(".js-password-message")
    enableListeners();
}

function handleFloatingLabel() {
   
}

function handlePasswordSwitcher() {
    const passwordInput = document.querySelector(".js-password");
    const passwordToggle = document.querySelector('.js-toggle-password');
    passwordToggle.addEventListener('change', function(){ //indien change gebruikt wordt kan je ook toggle doen met toetsenbord
        const toggleOptions = ['password', 'text'];
        passwordInput.type = toggleOptions[+this.checked]
        
        // if (passwordToggle.checked) {
        //     passwordInput.type = 'text';
        // } else {
        //     passwordInput.type = 'password';
        // }
    })
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    getDOMElements()
    handleFloatingLabel();
    handlePasswordSwitcher();
});