function validate() {
  const password1 = document.getElementById("password1").value;
  const password2 = document.getElementById("password2").value;

  if (password1 == password2) {
    document.getElementById("prompt").innerHTML =
      "<font color='lightgreen'>Passwords matched</font>";
    document.getElementById("button-register").disabled = false;
  } else {
    document.getElementById("prompt").innerHTML =
      "<font color='orange'>Passwords mismatched</font>";
    document.getElementById("button-register").disabled = true;
  }
}

function validateEmail() {
  const email = document.getElementById("email").value;
  //This regular expression is referenced : https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(email)){
    document.getElementById("emailPrompt").innerHTML =
    "<font color='lightgreen'>Valid e-mail</font>";
  }else{
    document.getElementById("emailPrompt").innerHTML =
    "<font color='orange'>Email is not valid</font>";
  }

}

