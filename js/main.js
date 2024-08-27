const navTriggerBtn = document.querySelector('#nav_trigger_btn');
const navMenu = document.querySelector('#nav_menu');

navTriggerBtn.addEventListener('click', ()=> {
    navMenu.classList.toggle('nav-is-open');
    navMenu.classList.toggle('border-t');
});


const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 3,
    spaceBetween: 20,
    autoplay: {
        delay: 3500,
        pauseOnMouseEnter: true,
    },
    speed: 650,
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
    duration: 1300,
    delay: 220,
})

sr.reveal('.about__text', { origin: 'left'});
sr.reveal('.about__img', { origin: 'right'});
sr.reveal('.header', { origin: 'top'});

sr.reveal('.card__item', { distance: '100px', interval: 100 });

sr.reveal('.best__text', {delay: 100});
sr.reveal('.best__grid', {delay: 1000});

sr.reveal('.otziv__bg', {delay: 220});
sr.reveal('.otziv__text');
sr.reveal('.otziv__slider', {delay: 1000});

sr.reveal('.contact__grid', {delay: 220});

sr.reveal('.footer__item', {delay: 220});

document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('button[aria-pressed]');

    button.addEventListener('click', function() {
        const isPressed = this.getAttribute('aria-pressed') === 'true';
        this.setAttribute('aria-pressed', !isPressed);
    });
});

// lazyLoadImage

const images = document.querySelectorAll("img[data-src]");

function loadImg(entries, observer) {
  if (!entries[0].isIntersecting) return;
  entries[0].target.src = entries[0].target.dataset.src;

  entries[0].target.addEventListener("load", function () {
    entries[0].target.classList.remove("blur-lg");
  });
  observer.unobserve(entries[0].target);
}
const imgObserver = new IntersectionObserver(loadImg, { threshold: 0.15 });

images.forEach((img) => {
  imgObserver.observe(img);
});


// smoothScrollWithOffset
const aboutBtns = document.querySelectorAll('.about');
const bestBtns = document.querySelectorAll('.best');
const reviewBtns = document.querySelectorAll('.review');
const contactBtns = document.querySelectorAll('.contact');

function scrollToTargetAdjusted(section) {
    const element = document.getElementById(section)
    let headerOffset = 115;
    if (element.id === 'contact') {
        if (window.innerWidth >= 640) {
            headerOffset = -120
        }
        headerOffset = 65
    }
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

aboutBtns.forEach(btn => btn.addEventListener('click', () => scrollToTargetAdjusted('about-me')));
bestBtns.forEach(btn => btn.addEventListener('click', () => scrollToTargetAdjusted('best')));
reviewBtns.forEach(btn => btn.addEventListener('click', () => scrollToTargetAdjusted('review')));
contactBtns.forEach(btn => btn.addEventListener('click', () => scrollToTargetAdjusted('contact')));
