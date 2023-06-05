const submit = document.getElementById("submit");

submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();
  console.log('Any Pointer Here')
  const fullnameField = document.getElementById("fullname");
//   const lastNameField = document.getElementById("lastname");
  const passwordField = document.getElementById("password")
  const confirmpasswordField = document.getElementById("confirmpassword")

  const emailField = document.getElementById("email");

  let valid = true;

  if (!fullnameField.value) {
    const nameError = document.getElementById("nameError");
    nameError.classList.add("visible");
    fullnameField.classList.add("invalid");
    nameError.setAttribute("aria-hidden", false);
    nameError.setAttribute("aria-invalid", true);
  }


  if (!emailField.value) {
    const emailError = document.getElementById("emailError");
    emailError.classList.add("visible");
    emailField.classList.add("invalid");
    emailError.setAttribute("aria-hidden", false);
    emailError.setAttribute("aria-invalid", true);
  }

  if(emailField.value){
     const emailTrim = emailField.value.trim();

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailTrim)) {
      const emailValidError = document.getElementById("emailValidError");
    emailValidError.classList.add("visible");
     emailError.classList.add("invisible");
    emailField.classList.add("invalid");
    emailValidError.setAttribute("aria-hidden", false);
    emailValidError.setAttribute("aria-invalid", true);
    }

  }

  if (!passwordField.value) {
    const passwordError = document.getElementById("passwordError");
    passwordError.classList.add("visible");
    passwordField.classList.add("invalid");
    passwordError.setAttribute("aria-hidden", false);
    passwordError.setAttribute("aria-invalid", true);
  }


    if (!confirmpasswordField.value) {
    const confirmpasswordError = document.getElementById("confirmpasswordError");
    confirmpasswordError.classList.add("visible");
    confirmpasswordField.classList.add("invalid");
    confirmpasswordError.setAttribute("aria-hidden", false);
    confirmpasswordError.setAttribute("aria-invalid", true);
  }

  if(confirmpasswordField.value !== passwordField.value){
     const confirmpasswordError = document.getElementById("confirmpasswordError");
    confirmpasswordError.classList.add("visible");
    confirmpasswordField.classList.add("invalid");
    confirmpasswordError.setAttribute("aria-hidden", false);
    confirmpasswordError.setAttribute("aria-invalid", true);
  }



  // email = emailInput.value.trim();
  
  
  alert("Form Submitted Successfully")
  fullnameField.value = "";
  emailField.value = "";
  passwordField.value = "";
  confirmpasswordField.value = "";

  return valid;
}