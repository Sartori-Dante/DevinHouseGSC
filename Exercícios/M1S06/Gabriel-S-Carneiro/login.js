import { users } from "./registered-users.js";

var validEmail;
var inputEmail;
var inputPW;
var emailOk;
var passOk;
var UserValid;

document.getElementById('error-msg-login').hidden = true
document.getElementById('error-msg-pass').hidden = true

document.getElementById('Login').addEventListener('click', () => {
    //Email Checker
    inputEmail = document.getElementById('input-email').value;
    console.log("inputEmail = " + inputEmail);

    validEmail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (inputEmail.match(validEmail)) {
    console.log("email ok");
    document.getElementById('error-msg-login').hidden = true;
    emailOk = true;
  } else {
    console.log("email not ok");
    document.getElementById("error-msg-login").hidden = false;
  }

  //Password Checker
  inputPW = document.getElementById('input-pw').value;
  console.log("inputPW = " + inputPW);

  if(inputPW === "")
  {
    console.log("password not ok");
    document.getElementById('error-msg-pass').hidden = false;

  } else {
    console.log("password ok");
    document.getElementById('error-msg-pass').hidden = true;
    passOk = true;
  }

  if (emailOk == true && passOk == true)
  {
    console.log("User Valid")
    UserValid = true;
  }

  console.log("userValid = " + UserValid);

  if(UserValid == true)
  {
    console.log("inputEmail 2 = " + inputEmail);
    console.log("inputPW 2 = " + inputPW);

    const usuarioEncontrado = !!users.find(
    user => user.email === inputEmail && 
    user.senha === inputPW);
    console.log("usuarioEncontrado = ", usuarioEncontrado);

    if (usuarioEncontrado == true)
    {
      console.log("deu bom")
      window.location.href = "home.html"
    } else {
      console.log("deu ruim")
      alert("Username and/or Password do not match.");
    }
  }
})
