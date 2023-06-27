var email=document.getElementById('field1');
var err1=document.getElementById('err1');
var pwd=document.getElementById('field2');
var err2=document.getElementById('err2');
var phone=document.getElementById('field3');
var err3=document.getElementById('err3');
var regex1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var regex = /^(\d{3}[-\s.]?)?\d{3}[-\s.]?\d{4}$/;


function ValidateEmail() {

    if (email.value.trim() == '') {
        err1.innerText = "Field cannot be empty";
        email.style.border = '1px solid red';
        return false;
    } else if (!regex1.test(email.value)) {
        err1.innerText = "Email is not in correct format";
        email.style.border = '1px solid red';
        return false;
    } else {
        err1.innerText = "";
        email.style.border = '2px solid green';
        return true;
    }
}
function ValidatePassword(){

    if (pwd.value.trim() == '') {
        err2.innerText = "Field cannot be empty";
        pwd.style.border = '1px solid red';
        return false;
    } else if (pwd.value.length < 8) {
        err2.innerText = "Minimum of 8 characters is required";
        pwd.style.border = "2px solid red";
        return false;
    } else if (!/[A-Z]/.test(pwd.value)) {
        err2.innerText = "Password should contain at least one uppercase letter";
        pwd.style.border = "2px solid red";
        return false;
    } else if (!/[a-z]/.test(pwd.value)) {
        err2.innerText = "Password should contain at least one lowercase letter";
        pwd.style.border = "2px solid red";
        return false;
    } else if (!/\d/.test(pwd.value)) {
        err2.innerText = "Password should contain at least one number";
        pwd.style.border = "2px solid red";
        return false;
    } else {
        err2.innerText = "Password is strong";
        pwd.style.border = '2px solid green';
        return true;
    }
}
function ValidatePhone() {


    if (phone.value.trim() == '') {
        err3.innerText = "Field cannot be empty";
        phone.style.border = '1px solid red';
        return false;
    } else if (phone.value.length !== 10) {
        err3.innerText = "Phone number should contain 10 digits";
        phone.style.border = "2px solid red";
        return false;
    } else if (!regex.test(phone.value)) {
        err3.innerText = "Phone number is not in the correct format (e.g., XXX-XXX-XXXX, XXX XXX XXXX, XXX.XXX.XXX)";
        phone.style.border = '2px solid red';
        return false;
    } else {
        err3.innerText = "";
        phone.style.border = '2px solid green';
        return true;
    }
}









