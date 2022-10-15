"use strict";

function changeNB() {
  var logo = document.querySelector('.Logo');
  var navBar = document.querySelector('.navbar');
  var navContent = document.querySelector('.navContent');
  var NC1 = document.querySelector('.navContent1');
  var NC2 = document.querySelector('.navContent2');
  var NC3 = document.querySelector('.navContent3');
  var NC4 = document.querySelector('.navContent4');
  var scrollvalue = window.scrollY;

  if (scrollvalue > 100) {
    navBar.classList.add('nav-scroll');
    logo.classList.add('Logo-scroll');
    navContent.classList.add('navC-Scroll');
    NC1.classList.add('navActive');
    NC2.classList.add('navActive');
    NC3.classList.add('navActive');
    NC4.classList.add('navActive');
  } else {
    navBar.classList.remove('nav-scroll');
    logo.classList.remove('Logo-scroll');
    navContent.classList.remove('navC-Scroll');
    NC1.classList.remove('navActive');
    NC2.classList.remove('navActive');
    NC3.classList.remove('navActive');
    NC4.classList.remove('navActive');
  }
}

window.addEventListener("scroll", changeNB);