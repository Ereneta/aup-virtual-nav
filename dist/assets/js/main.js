let date = new Date();
let yearPos = document.getElementById("getYear");
let currYear = date.getFullYear();
yearPos.innerHTML = currYear;

// Form JS
const MDCTextField = mdc.textField.MDCTextField;
const buttonRipple = mdc.ripple.MDCRipple;
const button = new buttonRipple(document.querySelector('.mdc-button--raised'));
const mdctext = new MDCTextField(document.querySelector('.mdc-text-field'));
const mdctextarea = new MDCTextField(document.querySelector('.mdc-text-field--textarea'));