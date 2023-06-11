document.title = "";
var titles = ["Game Designer","Web Developer","Electronics Hobbyist"];
var titleInterval = 2800;
var currentTitleIndex = 0;

const navbar = document.querySelector(".navbar"); 
const burger = document.querySelector('.burger');
const navLinksWrapper = document.querySelector('.navbar ul');
const navLinks = document.querySelectorAll('.navbar ul li');

changeTitle();
setInterval(changeTitle, titleInterval);


addEventListener('scroll', e => {
    if (window.scrollY > 100) {
        navbar.classList.add("drop-shadow") // Add drop shadow to navbar
      } else {
        navbar.classList.remove("drop-shadow") // Remove drop shadow from navbar
      }
})

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

function lerp (start, end, amt){
    return (1-amt)*start+amt*end
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