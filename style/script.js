let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');
const indicators = document.querySelectorAll('.carousel-indicators li');

function showSlide(index) {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    slides[index].style.display = 'block';

    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });

    indicators[index].classList.add('active');
}

function prevSlide() {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showSlide(index);
    });
});

showSlide(currentSlide);
