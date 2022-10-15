const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const body = document.querySelector('body')

    const img = document.getElementById('img');

    //toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        body.classList.toggle('body');


//animate links?? //TO DO
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 3}s';
            }
        });
//burger animation
            burger.classList.toggle('toggle');

    });
}







navSlide();
