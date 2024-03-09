const inputs = document.querySelectorAll('input');
const formButton = document.getElementById('form-button');



const regex = {

  username: /^[a-z0-9]{5,12}$/i,
  email: /^([a-z\d.-]+)@([a-z]+)\.([a-z]+)?$/,
  password: /^[\w@-]{8,20}$/,
  telephone: /^[\d]{11}$/

}



function validate(field, regex) {

  field.className = (regex.test(field.value))?"valid":"invalid";

}



inputs.forEach((input) => {
  
  input.addEventListener('keyup', (e) => {
    
    if (formButton.classList.contains("valid")) {
      formButton.classList.remove("valid");
    }
    if (formButton.classList.contains("invalid")) {
      formButton.classList.remove("invalid");
    }

    validate(e.target, regex[e.target.attributes.name.value]);
    
  });

});



formButton.addEventListener('click', (e) => {
  let success = true;

  inputs.forEach((input) => {
    
    if (!(regex[input.attributes.name.value].test(input.value))) {
      success = false;
    }
    
  });

  formButton.className=success?"valid":"invalid";

});