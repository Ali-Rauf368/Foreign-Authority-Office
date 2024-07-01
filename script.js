let currentSlide = 0;
const slides = document.querySelector('.carousel-images');
const totalSlides = slides.children.length;

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function autoSlide() {
    changeSlide(1);
}

setInterval(autoSlide, 3000); // Change slide every 3 seconds
