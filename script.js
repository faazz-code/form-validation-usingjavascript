var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        nameError.innerHTML = "Name is Required";
        return false;
    }

    // Corrected regular expression
    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = "Write full name";
        return false;
    }

    nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value;

    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }

    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone number must be 10 digits';
        return false;
    }

    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Phone number must contain only digits';
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}
function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }

    // Email validation regex pattern
    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailError.innerHTML = 'Enter a valid email address';
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById('contact-message').value;

    if (message.length == 0) {
        messageError.innerHTML = 'Message is required';
        return false;
    }

    if (message.length < 30) {
        messageError.innerHTML = 'Message must be at least 30 characters long';
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}


