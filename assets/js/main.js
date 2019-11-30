function closeNav() {
    document.getElementById("sidebar").style.width = "0";
}

function openNav() {
    document.getElementById("sidebar").style.width = "250px";
}

let date = new Date();
let yearPos = document.getElementById("getYear");
let currYear = date.getFullYear();
yearPos.innerHTML = currYear;

const MDCMenu = mdc.menu.MDCMenu;
const menu = new MDCMenu(document.querySelector('.mdc-menu'));

function openLinkMenu() {
    menu.open = true;
} 
