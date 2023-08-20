function updateDimensions() {
    const dimensionsElement = document.getElementById('dimensions');
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    dimensionsElement.textContent = `${width} x ${height}`;
}
updateDimensions();
window.addEventListener('resize', updateDimensions);

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

if (next){next.addEventListener('click', nextSlide);}
if (prev){prev.addEventListener('click', prevSlide);}

// setInterval(nextSlide, 5000);

/******************************************************/

// Vérifie si l'élément existe avant d'ajouter un événement
const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  const numberElement = counter.querySelector('.number');
  if (numberElement) {
    const targetNumber = parseInt(numberElement.textContent);
    const animationDuration = 2000;
    const framesPerSecond = 60;
    const frameDuration = Math.round(1000 / framesPerSecond);

    let currentNumber = 0;
    let frame = 0;

    function updateCounter() {
      const progress = frame / (animationDuration / frameDuration);
      const increment = Math.floor(targetNumber * progress);

      if (currentNumber < targetNumber) {
        numberElement.textContent = increment;
        currentNumber = increment;
        frame++;
        requestAnimationFrame(updateCounter);
      } else {
        numberElement.textContent = targetNumber;
      }
    }

    updateCounter();
  }
});

/******************************************************/
