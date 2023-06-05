const submit = document.getElementById("submit");

submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();
  console.log('Any Pointer Here')
  const firstNameField = document.getElementById("firstname");
  const lastNameField = document.getElementById("lastname");

  const emailField = document.getElementById("lastname");

  let valid = true;
