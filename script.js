document.title = "";
var titles = ["Game Designer","Web Developer","Electronics Hobbyist"];
var titleInterval = 2800;
var currentTitleIndex = 0;

const navbar = document.querySelector(".navbar"); 
const burger = document.querySelector('.hamburger.menu');
const navLinksWrapper = document.querySelector('.navbar ul');
const navLinks = document.querySelectorAll('.navbar ul li');

const socialBar = document.querySelector('.socials-bar');
const socialBurger = document.querySelector('.hamburger.socials');
const socialButtons = document.querySelectorAll('.socials-bar a');

const educationItems = document.querySelectorAll('.education-item');

changeTitle();
setInterval(changeTitle, titleInterval);

var typingEffect = new Typed(".multi-text",{
    strings : ["Game Designer","Web Developer","Electronics Hobbyist"],
    loop : true,
    typeSpeed : 60,
    backSpeed : 30,
    backDelay : 1500
})

function changeTitle() {
    document.title = "Jacob Wigent - " + titles[currentTitleIndex%titles.length];
    currentTitleIndex++;
}

function navSlide() {
    //Toggle nav
    navLinksWrapper.classList.toggle('nav-active');
    navbar.classList.toggle('nav-active');

    //Animate links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = 'navLinkFade 0.5s ease forwards ' + (index / 10 + 0.15) + 's';
        }
    });

    burger.classList.toggle('burger-toggle');
}

function socialOpen() {
    //Toggle nav
    socialBar.classList.toggle('social-active');

    //Animate links
    socialButtons.forEach((button, index) => {
        if (button.style.animation) {
            button.style.animation = '';
        } else {
            button.style.animation = 'socialButtonsOpen 0.5s ease forwards ' + (index / 10 + 0.15) + 's';
        }
    });

    socialBurger.classList.toggle('burger-toggle');
}

function selectEducation(index) {
    educationItems.forEach(element => {
        element.classList.remove('selected');
    });

    educationItems[index].classList.toggle('selected');
}
  