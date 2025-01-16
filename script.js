var nameError = document.getElementById('name-error')
var phoneError = document.getElementById('name-error')
var emailError = document.getElementById('name-error')
var messageError = document.getElementById('name-error')
var submitError = document.getElementById('name-error')

function validateName(){
    var name = document.getElementById('contact-name').value;

    if (name.length== 0){
        nameError.innerHTML= "Name is Required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)){
        nameError.innerHTML= "write full name";
    }
    nameError.innerHTML= '<i class="fa-solid fa-check"></i>';
    return true;
}