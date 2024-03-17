function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function LoginorReg() {
    let login = document.getElementById('login');
    let loginPara = document.getElementById('loginPara');
    let header = document.getElementById("header2");
    let username = document.getElementById('usernameInput');
    let password = document.getElementById('passwordInput');
    let email = document.getElementById('emailInput');
    let paraEmail = document.getElementById('emailId');
    let ConfirmPass = document.getElementById('confirmpasswordInput');
    let paraConfirm = document.getElementById('confirmpasswordId');

    if (login.value == "Login here!!") {
        login.value = "Register";
        loginPara.innerText = "Don't you have an account?";
        header.innerText = "LOGIN HERE";
        username.style.display = 'block';
        password.style.display = 'block';
        email.style.display = 'none';
        ConfirmPass.style.display = 'none';
        paraEmail.style.display = 'none';
        paraConfirm.style.display = 'none';

    } else {
        login.value = "Login here!!";
        loginPara.innerText = "Already have an account?";
        header.innerText = "REGISTER HERE";
        username.style.display = 'block';
        password.style.display = 'block';
        email.style.display = 'block';
        ConfirmPass.style.display = 'block';
        paraEmail.style.display = 'block';
        paraConfirm.style.display = 'block';
    }
}

function checkFields() {
    let username = document.getElementById('usernameInput');
    let password = document.getElementById('passwordInput');
    let email = document.getElementById('emailInput');
    let paraUser = document.getElementById('usernameId');
    let paraPass = document.getElementById('passwordId');
    let paraEmail = document.getElementById('emailId');
    let ConfirmPass = document.getElementById('confirmpasswordInput');
    let paraConfirm = document.getElementById('confirmpasswordId');
    let Message = document.getElementById('Message');

    let Count = 0;
    if (ConfirmPass.value.length == 0) {
        paraConfirm.innerText = 'This field is required';
        ConfirmPass.style.borderColor = 'red';
    } else if (ConfirmPass.value != password.value) {
        paraConfirm.innerText = 'Provided passwords are not the same';
        ConfirmPass.style.borderColor = 'red';
    } else {
        paraConfirm.innerText = '';
        ConfirmPass.style.borderColor = 'white';
        Count = Count + 1;
    }

    if (username.value.length == 0) {
        paraUser.innerText = "Username is required";
        username.style.borderColor = 'red';
    } else if (username.value.length <= 4) {
        paraUser.innerText = "Username is too short";
        username.style.borderColor = 'red';
    } else {
        paraUser.innerText = '';
        username.style.borderColor = 'white';
        Count = Count + 1;
    }

    if (password.value.length == 0) {
        paraPass.innerText = "Password field is required";
        password.style.borderColor = 'red';
    } else if (password.value.length < 8) {
        paraPass.innerText = "Password length must be at least 8 characters";
        password.style.borderColor = 'red';
    } else {
        paraPass.innerText = '';
        password.style.borderColor = 'white';
        Count = Count + 1;
    }

    if (email.value.length == 0) {
        paraEmail.innerText = "Email is required";
        email.style.borderColor = 'red';
    } else if (!isValidEmail(email.value)) {
        paraEmail.innerText = "Enter a valid email address";
        email.style.borderColor = 'red';
    } else {
        paraEmail.innerText = '';
        email.style.borderColor = 'white';
        Count = Count + 1;
    }
    if (Count == 4) {
        Message.innerText = 'Registration successful!';
        Message.style.color = 'green';
        Count = 0;
    } else {
        Message.innerText = '';
    }
}
