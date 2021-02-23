const homeDiv = document.getElementById("home");
const navDiv = document.getElementById("nav");
const aboutDiv = document.getElementById("about");
const menuDiv = document.getElementById("menu");
const teamDiv = document.getElementById("team");
const resDiv = document.getElementById("reservation");
const contactDiv = document.getElementById("contact");

const navBtn = document.querySelector(".nav-ham");
const navItems = document.querySelector(".nav-items");
const hamBefore = document.querySelector(".ham-before");
const hamAfter = document.querySelector(".ham-after");

window.addEventListener("scroll", showNavColor);

function removeNavItems() {
  navItems.classList.add("nav-items-hidden");
  navItems.classList.remove("nav-items-display");
}

function showNavItems() {
  if (navItems.classList.contains("nav-items-hidden")) {
    navItems.classList.add("nav-items-display");
    navItems.classList.remove("nav-items-hidden");
  } else {
    navItems.classList.remove("nav-items-display");
    navItems.classList.add("nav-items-hidden");
  }
}

function checkHam() {
  if (hamBefore.classList.contains("ham-active")) {
    hamBefore.classList.remove("ham-active");
    hamAfter.classList.add("ham-active");
  } else {
    hamAfter.classList.remove("ham-active");
    hamBefore.classList.add("ham-active");
  }
}
function removeHam() {
  hamAfter.classList.remove("ham-active");
  hamBefore.classList.add("ham-active");
}

function showNavColor() {
  let aboutHeight = aboutDiv.scrollHeight;
  let windowHeight = window.scrollY;
  if (aboutHeight > windowHeight) {
    navDiv.classList.remove("nav-color");
    navItems.classList.remove("nav-color");
  } else {
    navDiv.classList.add("nav-color");
    navItems.classList.add("nav-color");
  }
}

/* one page nav */
$("#nav-ul").onePageNav({
  currentClass: "current",
  changeHash: false,
  scrollSpeed: 750,
  scrollThreshold: 0.5,
  filter: "",
  easing: "swing",
});


const resLink = document.querySelector(".home-btn-book")
resLink.addEventListener('click',linkRes)
function linkRes(){
   window.location.href='#reservation';
}