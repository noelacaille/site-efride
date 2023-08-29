// EF'Ride - scripts/script.js

const carroussel = document.querySelector('.sp-carroussel');
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
let index = 0;

const activeSlide = n =>{
    for (slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n =>{
    for (dot of dots){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrentSlide = ind =>{
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () =>{
    if (index == slides.length - 1){
        index = 0;
        prepareCurrentSlide(index);
    } else{
        index++;
        prepareCurrentSlide(index);
    }
}

const prevSlide = () =>{
    if (index == 0){
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else{
        index--;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot) =>{
    item.addEventListener('click', () =>{
        index = indexDot;
        prepareCurrentSlide(index);
    })
})

if (next){next.addEventListener('click', nextSlide);}
if (prev){prev.addEventListener('click', prevSlide);}

// setInterval(nextSlide, 5000);

/******************************************************/

const counters = document.querySelectorAll('.counter');

counters.forEach((counter) =>{
  const numberElement = counter.querySelector('.number');
  if (numberElement){
    const targetNumber = parseInt(numberElement.textContent);
    const animationDuration = 2000;
    const framesPerSecond = 60;
    const frameDuration = Math.round(1000 / framesPerSecond);

    let currentNumber = 0;
    let frame = 0;

    function updateCounter(){
      const progress = frame / (animationDuration / frameDuration);
      const increment = Math.floor(targetNumber * progress);

      if (currentNumber < targetNumber){
        numberElement.textContent = increment;
        currentNumber = increment;
        frame++;
        requestAnimationFrame(updateCounter);
      } else{
        numberElement.textContent = targetNumber;
      }
    }

    updateCounter();
  }
});

/******************************************************/

document.addEventListener('DOMContentLoaded', function(){
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const body = document.body;

    menuToggle.addEventListener('click', function(){
        menu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        body.classList.toggle('menu-open');
    });

    // Gestion des clics sur les liens du menu
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link =>{
        link.addEventListener('click', function(){
            menu.classList.remove('active');
            menuToggle.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });
});



/******************************************************/

function updateDimensionDisplay(){
    const dimensionDisplay = document.getElementById('dimensionDisplay');
    const width = window.innerWidth;
    const height = window.innerHeight;
    dimensionDisplay.textContent = `${width} x ${height}`;
}

updateDimensionDisplay();

window.addEventListener('resize', updateDimensionDisplay);

/******************************************************/
