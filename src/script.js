document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;
    const logo = document.querySelector('.logo img');
    const links = document.querySelectorAll('header nav ul li a.sc');

    // Clic sur le logo pour faire revenir la page en haut
    logo.addEventListener('click', function(e) {
        e.preventDefault();
        scrollSmoothly(0);
    });

    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - headerHeight;
            scrollSmoothly(offsetTop);
        });
    });

    function scrollSmoothly(targetPosition) {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 800; // Durée de l'animation en millisecondes
        let start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const percentage = Math.min(progress / duration, 1);
            const easing = easeInOutCubic(percentage);
            window.scrollTo(0, startPosition + distance * easing);
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    }

    // Fonction d'interpolation pour obtenir un défilement lent
    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
});

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
