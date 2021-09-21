
//function that checks if user entry is a valid email address
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

function checkFirstName() {}

function checkLastName() {}

function checkPassword() {}