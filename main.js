const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const navToggle = document.getElementById('nav-toggle');

/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener("click", () => { 
        navMenu.classList.add('show-menu');
    });
}
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener("click", () => { 
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))   


const blurHeader = () =>{
    const header = document.getElementById('header')
    // When scoll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader)

