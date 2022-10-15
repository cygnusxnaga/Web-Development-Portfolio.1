"use strict";

var hamburger = document.querySelector(".hamburger");
var navContent = document.querySelector(".navContent");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navContent.classList.toggle("active");
});
document.querySelectorAll('').forEach(function (n) {
  return n.addEventListener('click', function () {
    hamburger.classList.remove("active");
    navContent.classList.remove("active");
  });
});