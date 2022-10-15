const hamburger = document.querySelector(".hamburger");
const navContent = document.querySelector(".navContent");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navContent.classList.toggle("active");
})

document.querySelectorAll('').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove("active");
    navContent.classList.remove("active");
}))