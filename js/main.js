const navTriggerBtn = document.querySelector('#nav_trigger_btn');
const navMenu = document.querySelector('#nav_menu');

navTriggerBtn.addEventListener('click', ()=> {
    navMenu.classList.toggle('nav-is-open');
});


const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        960: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 2,
        },
    },
})


const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1700,
    delay: 600,
})

sr.reveal('.about__text', { origin: 'left'});
sr.reveal('.about__img', { origin: 'right'});

sr.reveal('.card__item', { distance: '100px', interval: 100 });

sr.reveal('.best__text', {delay: 100});
sr.reveal('.best__grid', {delay: 1000});

sr.reveal('.otziv__bg', {delay: 600});
sr.reveal('.otziv__text');
sr.reveal('.otziv__slider', {delay: 1000});

sr.reveal('.contact__grid', {delay: 600});

sr.reveal('.footer__item', {delay: 600});

const img = new Image();
img.fetchPriority = "high";
img.src = "img/Main-img.avif";