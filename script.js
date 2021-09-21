 // fires the functions when the button is clicked
function submitForm(){
    checkFirstName();
    checkLastName();
    checkEmail();
    checkPassword();
}

// checks if the user entered a first name
function checkFirstName(firstName) {
    var firstName = $('input[name=first]').val();
    if(firstName == false){
        var firstError = document.querySelector('#firsterror');
        var ex1 = document.querySelector('#ex1');
        var firstInput = document.querySelector('#input1')
        // unhide the error message
        firstError.style.visibility = "visible";
        // unhide the exclamation point
        ex1.style.display = "block";
        // turn the border around the input field red
        firstInput.style.border = "2px solid #FF7979";
    }
}

// checks if the user entered a last name
function checkLastName(lastName) {
    var lastName = $('input[name=last]').val();
    if(lastName == false){
        var lastError = document.querySelector('#lasterror');
        var ex2 = document.querySelector('#ex2');
        var lastInput = document.querySelector('#input2')
        // unhide the error message
        lastError.style.visibility = "visible";
        // unhide the exclamation point
        ex2.style.display = "block";
        // turn the border around the input field red
        lastInput.style.border = "2px solid #FF7979";
    }
}

// checks if user entry is a valid email address
function checkEmail(email) {
    // selects the email input field's value
    var email = $('input[name=email]').val();
    // regex
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if email field is blank or not an email address...
    if(!re.test(email)){
        var emailError = document.querySelector('#emailerror');
        var ex3 = document.querySelector('#ex3');
        var emailInput = document.querySelector('#input3');
        // unhide the error message
        emailError.style.visibility = "visible";
        // unhide the exclamation point
        ex3.style.display = "block";
        // turn the border around the input field red
        emailInput.style.border = "2px solid #FF7979";
    }
}

// checks if the user entered a password
function checkPassword(password) {
    var password = $('input[name=password]').val();
    if(password == false){
        var passError = document.querySelector('#passerror');
        var ex4 = document.querySelector('#ex4');
        var passInput = document.querySelector('#input4')
        // unhide the error message
        passError.style.visibility = "visible";
        // unhide the exclamation point
        ex4.style.display = "block";
        // turn the border around the input field red
        passInput.style.border = "2px solid #FF7979";
    }
}
