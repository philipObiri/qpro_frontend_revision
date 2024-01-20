let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slider-item').length;
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    const translateValue = -currentIndex * 100 + '%';
    slides.style.transform = 'translateX(' + translateValue + ')';
    updateDots();
}

function currentSlide(index) {
    currentIndex = index - 1;
    const slides = document.querySelector('.slides');
    const translateValue = -currentIndex * 100 + '%';
    slides.style.transform = 'translateX(' + translateValue + ')';
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function resetToFirstSlide() {
    currentIndex = 0;
    const slides = document.querySelector('.slides');
    const translateValue = -currentIndex * 100 + '%';
    slides.style.transform = 'translateX(' + translateValue + ')';
    updateDots();
}

function handleNextButtonClick() {
    const totalSlides = document.querySelectorAll('.slider-item').length;
    if (currentIndex === totalSlides - 1) {
        // If at the end, reset to the first slide
        resetToFirstSlide();
    } else {
        // Move to the next slide
        changeSlide(1);
    }
}

function handlePrevButtonClick() {
    const totalSlides = document.querySelectorAll('.slider-item').length;
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Corrected this line
    const slides = document.querySelector('.slides');
    const translateValue = -currentIndex * 100 + '%';
    slides.style.transform = 'translateX(' + translateValue + ')';
    updateDots();
}
