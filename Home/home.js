const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
const intervalTime = 3000; // tempo em milissegundos (3000 = 3 segundos)

function showNextSlide() {

    slides[currentSlide].classList.remove("active");
    
    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, intervalTime);
