function handleFloatingLabel() {console.log("floating label");
    let input = document.querySelector('.js-floating-input'),
        label = document.querySelector('.js-floating-label');

    input.addEventListener('blur', function () {
        
        if (input.value) {
            label.classList.add('is-floating');
        } else {
            label.classList.remove('is-floating');
        }
    });
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
    handleFloatingLabel();
    handlePasswordSwitcher();
});