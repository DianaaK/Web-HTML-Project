let allowedInput = {
    allowedName: false,
    allowedMail: false,
    allowedPass: false,

    valid: function() {
        return this.allowedName && this.allowedMail && this.allowedPass;
    }
}

function requiredInput(fieldId) {
    let field = document.getElementById(fieldId);
    field.oninput = field.onfocus = function() {
        if (this.value == "") {
            this.style.border = '1px solid #FF0000';
            allowedInput.allowedName = false;
        } else {
            this.style.border = '1px solid #00FF00';
            allowedInput.allowedName = true;
        }
    };
    field.onblur = function() {
        this.style.border = '1px solid #ccc';
    };

}

function validateEmail(emailId) {
    let email = document.getElementById(emailId);
    let re = /^[a-zA-Z0-9!?-]+(\.[a-zA-Z0-9!?~-]+)*@([a-z0-9]+([a-z0-9-]*)\.)+[a-zA-z]+$/;

    email.oninput = email.onfocus = function() {
        if (!re.test(email.value)) {
            this.style.border = '1px solid #FF0000';
            allowedInput.allowedMail = false;
        } else {
            this.style.border = '1px solid #00FF00';
            allowedInput.allowedMail = true;
        }
    };

    email.onblur = function() {
        this.style.border = '1px solid #ccc';
    }
}

function validatePassword(passId, passIdRepeat) {
    let password = document.getElementById(passId);
    let re = /(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*;':"|?=_-])[a-zA-Z0-9!@#$%^&*;':"|?=_-]{8,}/;
    password.oninput = password.onfocus = function() {
        document.getElementById("passOverlay").style.display = "block";
        if (!re.test(password.value)) {
            this.style.border = '1px solid #FF0000';
            allowedInput.allowedPass = false;
        } else {
            this.style.border = '1px solid #00FF00';
            allowedInput.allowedPass = true;
        }
    };

    let passwordRepeat = document.getElementById(passIdRepeat);
    passwordRepeat.oninput = passwordRepeat.onfocus = function() {
        if (password.value == passwordRepeat.value && re.test(passwordRepeat.value)) {
            this.style.border = '1px solid #00FF00';
            allowedInput.allowedPass = true;
        } else {
            this.style.border = '1px solid #FF0000';
            allowedInput.allowedPass = false;
        }
    }

    password.onblur = passwordRepeat.onblur = function() {
        document.getElementById("passOverlay").style.display = "none";
        this.style.border = '1px solid #ccc';
    };

}

function validateForm() {

    requiredInput('registerSurname');
    requiredInput('registerName');
    validateEmail('registerEmail');
    validatePassword('registerPassword', 'registerPasswordRe');
}


(function onSubmit() {
    let submit = document.getElementById('submitButton');
    submit.addEventListener("click", function(event) {
        if (allowedInput.valid()) {
            getPage('id_userpage');
        } else {
            window.location.href = "file:///C:/Users/schwa/Desktop/chestie/index.html#inregistrare";
            Swal.fire('Date incorecte');
        }
    });
})();