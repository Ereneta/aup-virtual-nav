function closeNav() {
    document.getElementById("sidebar").style.width = "0";
}

function openNav() {
    document.getElementById("sidebar").style.width = "250px";
}

// Form JS
const MDCTextField = mdc.textField.MDCTextField;
const buttonRipple = mdc.ripple.MDCRipple;
const button = new buttonRipple(document.querySelector('.mdc-button--raised'));
const mdctext = new MDCTextField(document.querySelector('.mdc-text-field'));
const mdctextarea = new MDCTextField(document.querySelector('.mdc-text-field--textarea'));

const nav = document.querySelector('#nav');
const menu = document.querySelector('#menu');
const menuToggle = document.querySelector('.nav__toggle');
let isMenuOpen = false;


// TOGGLE MENU ACTIVE STATE
menuToggle.addEventListener('click', e => {
    e.preventDefault();
    isMenuOpen = !isMenuOpen;

    // toggle a11y attributes and active class
    menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
    menu.hidden = !isMenuOpen;
    nav.classList.toggle('nav--open');
});


// TRAP TAB INSIDE NAV WHEN OPEN
nav.addEventListener('keydown', e => {
    // abort if menu isn't open or modifier keys are pressed
    if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
        return;
    }

    // listen for tab press and move focus
    // if we're on either end of the navigation
    const menuLinks = menu.querySelectorAll('.nav__link');
    if (e.keyCode === 9) {
        if (e.shiftKey) {
            if (document.activeElement === menuLinks[0]) {
                menuToggle.focus();
                e.preventDefault();
            }
        } else if (document.activeElement === menuToggle) {
            menuLinks[0].focus();
            e.preventDefault();
        }
    }
});