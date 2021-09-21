
//function that checks if user entry is a valid email address
function checkEmail(email) {
    // selects the email input field's value
    var email = $('input[name=email]').val();
    // regex
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if email is not an email address...
    if(!re.test(email)){
        var emailError = document.querySelector('#emailerror');
        // var exPoint = document.querySelector('.exclamation');
        var input = document.querySelector('input');
        // unhide the error message
        emailError.style.display = "block";
        // unhide the exclamation point
        // exPoint.style.display = "block";
        // turn the border around the input field red
        input.style.border = "2px solid #F96464";
    }
}

function checkFirstName() {}

function checkLastName() {}

function checkPassword() {}