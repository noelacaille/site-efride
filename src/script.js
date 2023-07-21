// document.addEventListener('DOMContentLoaded', function() {
//     const header = document.querySelector('header');
//     const headerHeight = header.offsetHeight;
//     const logo = document.querySelector('.logo img');
//     const links = document.querySelectorAll('header nav ul li a.sc');

//     // Clic sur le logo pour faire revenir la page en haut
//     logo.addEventListener('click', function(e) {
//         e.preventDefault();
//         scrollSmoothly(0);
//     });

//     links.forEach(function(link) {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
//             const href = this.getAttribute('href');
//             const target = document.querySelector(href);
//             const offsetTop = target.offsetTop - headerHeight;
//             scrollSmoothly(offsetTop);
//         });
//     });

//     function scrollSmoothly(targetPosition) {
//         const startPosition = window.pageYOffset;
//         const distance = targetPosition - startPosition;
//         const duration = 800; // Durée de l'animation en millisecondes
//         let start = null;

//         function step(timestamp) {
//             if (!start) start = timestamp;
//             const progress = timestamp - start;
//             const percentage = Math.min(progress / duration, 1);
//             const easing = easeInOutCubic(percentage);
//             window.scrollTo(0, startPosition + distance * easing);
//             if (progress < duration) {
//                 window.requestAnimationFrame(step);
//             }
//         }

//         window.requestAnimationFrame(step);
//     }

//     // Fonction d'interpolation pour obtenir un défilement lent
//     function easeInOutCubic(t) {
//         return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
//     }
// });

/******************************************************/

function updateDimensions() {
    const dimensionsElement = document.getElementById('dimensions');
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    dimensionsElement.textContent = `${width} x ${height}`;
}

// Appel initial pour mettre à jour les dimensions
updateDimensions();

// Écouteur d'événement de redimensionnement de la fenêtre pour mettre à jour les dimensions en temps réel
window.addEventListener('resize', updateDimensions);

/******************************************************/

// Récupère l'élément <main>
const mainElement = document.querySelector('main');

// Calcule la hauteur du footer et du header
const footerHeight = document.querySelector('footer').offsetHeight;
const headerHeight = document.querySelector('header').offsetHeight;

// Calcule la valeur pour min-height
const minHeightValue = `calc(100vh - ${footerHeight}px - ${headerHeight}px)`;

// Ajoute la propriété min-height au style de <main>
mainElement.style.minHeight = minHeightValue;

/******************************************************/

const carroussel = document.querySelector('.sp-carroussel');
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
let index = 0;

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// setInterval(nextSlide, 5000);

/******************************************************/
