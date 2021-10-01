console.log("FORM Sorting runnin'...");

console.log("This is project 4");
const userName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let success = document.getElementById('success');
success.style.display = "none";


let validEmail = false;
let validPhone = false;
let validUser = false;
// $('#failure').hide();
// $('#success').hide();

// console.log(userName, email, phone);
userName.addEventListener('blur', () => {
    console.log("name is blurred");
    // Validate userName here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = userName.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your userName is valid');
        userName.classList.remove('is-invalid');
        validUser = true;
    }
    else {
        console.log('Your userName is not valid');
        userName.classList.add('is-invalid');
        validUser = false;

    }
})

email.addEventListener('blur', () => {
    console.log("email is blurred");
    // Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

phone.addEventListener('blur', () => {
    console.log("phone is blurred");
    // Validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;

    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();

    console.log('You clicked on submit');
    console.log(validEmail, validUser, validPhone);


    // Submit your form here
    if (validEmail && validUser && validPhone) {

        console.log('Phone, email and user are valid. Submitting the form');
        let success = document.getElementById('success');

        setTimeout(() => {
            
            success.classList.remove('show');
            success.classList.remove('alert-success');
            success.style.display = 'none';


        }, 2500);

        success.classList.add('show');
        success.classList.add('alert-success');
        success.style.display = 'block';

    }
    else {
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let success = document.getElementById('success');

        setTimeout(() => {

            success.classList.remove('show');
            success.classList.remove('alert-danger');
            success.style.display = 'none';


        }, 2500);

        success.style.display = 'block';
        success.classList.add('show');
        success.classList.add('alert-danger');
        success.innerHTML = "<strong>Error!</strong> Your travel request has not been sent due to some errors"

    }



});

// CCCCCCCCOOOOOOOOONNNNNTRRRRRRzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzZZZZZZZ 