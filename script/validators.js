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

const addErrors = function(inputObject, errorMessage){
    inputObject.errorMessage.innerText = errorMessage;

    inputObject.field.classList.add('has-error')

    // inputObject.input.addEventListener('input', doubleCheckEmail)
}

const removeErrors = function(inputObject){
    inputObject.errorMessage.innerText = ''

    inputObject.field.classList.remove('has-error')
}

const doubleCheckEmail = function(){
    if (isValidEmailAddress(email.input.value)) {
        email.input.removeEventListener('input', doubleCheckEmail)
        removeErrors(email)
    }
}
const doubleCheckPassword = function(){
    if (isValidPassword(password.input.value)) {
        password.input.removeEventListener('input', doubleCheckPassword)
        removeErrors(password)
    }
}

const checkEmail = function(){
    if(isEmpty(email.input.value)){
        addErrors(email, 'Field is required')
        email.input.addEventListener('input', doubleCheckEmail)
        return
    }
    if(!isValidEmailAddress(email.input.value)){
        addErrors(email, 'Email is invalid')
        email.input.addEventListener('input', doubleCheckEmail)
        return
    }
}

const checkPassword = function(){
    if(isEmpty(password.input.value)){
        addErrors(password, 'Field is required')
        password.input.addEventListener('input', doubleCheckPassword)
        return
    }
    if(!isValidPassword(password.input.value)){
        addErrors(password, 'Password is invalid')
        password.input.addEventListener('input', doubleCheckPassword)
        return
    }
}

const enableListeners = function(){
    email.input.addEventListener('blur',function(){
        checkEmail()
    })
    password.input.addEventListener('blur',function(){
        checkPassword()
    })

    signInButton.addEventListener('click',function(e){
        e.preventDefault()
        if (
			isValidEmailAddress(email.input.value) &&
			isValidPassword(password.input.value)
		) {
			console.log('Everything is OK');
		} else {
			checkEmail()
            checkPassword()
		}
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
    handlePasswordSwitcher();
});