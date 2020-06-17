

let navEffect = function() {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-link');

    const navLink = document.querySelectorAll('.nav-link li');


    menu.addEventListener('click', function(){
        nav.classList.toggle('nav-active');
    });

    navLink.forEach((link, index) =>{
        link.style.animation = `navFade 0.5s ease forwards ${index / 7 + 1.5}s`;
    });
}

navEffect();



let slideIndex = 1;

function plusSlides(n){
    carousel(slideIndex += n);
}

function currentSlide(n){
    carousel(slideIndex -=n);
}
function carousel(n){
    let i;
    let slides = document.getElementsByClassName('slides');

    if (n > slides.length){
        slideIndex =1
    }
    if (n === 0){
        slideIndex =slides.length-1;
    }

    for(i=0; i<slides.length; i++){
        slides[i].style.display= 'none';
    }

    slides[slideIndex - 1].style.display= 'block';
}

carousel(slideIndex);