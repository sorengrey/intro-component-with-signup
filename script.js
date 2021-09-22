 // fires the functions when button is clicked
function submitForm(){
    checkFirstName();
    checkLastName();
    checkEmail();
    checkPassword();
}

// checks if user entered a first name
function checkFirstName(firstName) {
    var firstName = $('input[name=first]').val();
    var firstError = document.querySelector('#firsterror');
    var ex1 = document.querySelector('#ex1');
    var firstInput = document.querySelector('#input1')
    if(firstName == false){
        // unhide the error message
        firstError.style.visibility = "visible";
        // unhide the exclamation point
        ex1.style.display = "block";
        // turn the border around the input field red
        firstInput.style.border = "2px solid #FF7979";
    }
    // if user enters a first name, revert back
    if(firstName){
        // hide the error message
        firstError.style.visibility = "hidden";
        // hide the exclamation point
        ex1.style.display = "none";
        // change the border back
        firstInput.style.border = "1px solid #DEDEDE";
    }
}

// checks if user entered a last name
function checkLastName(lastName) {
    var lastName = $('input[name=last]').val();
    var lastError = document.querySelector('#lasterror');
    var ex2 = document.querySelector('#ex2');
    var lastInput = document.querySelector('#input2')
    if(lastName == false){
        // unhide the error message
        lastError.style.visibility = "visible";
        // unhide the exclamation point
        ex2.style.display = "block";
        // turn the border around the input field red
        lastInput.style.border = "2px solid #FF7979";
    }
    // if user enters a last name, revert back
    if(lastName){
        // hide the error message
        lastError.style.visibility = "hidden";
        // hide the exclamation point
        ex2.style.display = "none";
        // change the border back
        lastInput.style.border = "1px solid #DEDEDE";
    }
}

// checks if user entered valid email address
function checkEmail(email) {
    // selects the email input field's value
    var email = $('input[name=email]').val();
    // regex
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var emailError = document.querySelector('#emailerror');
    var ex3 = document.querySelector('#ex3');
    var emailInput = document.querySelector('#input3');
    // if email field is blank or not an email address...
    if(!re.test(email)){
        // unhide the error message
        emailError.style.visibility = "visible";
        // unhide the exclamation point
        ex3.style.display = "block";
        // turn the border around the input field red
        emailInput.style.border = "2px solid #FF7979";
    }
    // if user enters a valid email, revert back
    if(email){
        // hide the error message
        emailError.style.visibility = "hidden";
        // hide the exclamation point
        ex3.style.display = "none";
        // change the border back
        emailInput.style.border = "1px solid #DEDEDE";
    }
}

// checks if user entered a password
function checkPassword(password) {
    var password = $('input[name=password]').val();
    var passError = document.querySelector('#passerror');
    var ex4 = document.querySelector('#ex4');
    var passInput = document.querySelector('#input4')
    if(password == false){
        // unhide the error message
        passError.style.visibility = "visible";
        // unhide the exclamation point
        ex4.style.display = "block";
        // turn the border around the input field red
        passInput.style.border = "2px solid #FF7979";
    }
    // if user enters a password, revert back
    if(password){
        // hide the error message
        passError.style.visibility = "hidden";
        // hide the exclamation point
        ex4.style.display = "none";
        // change the border back
        passInput.style.border = "1px solid #DEDEDE";
    }
}
