const slides = document.querySelectorAll('.testimonial-slide');
let currentIndex = 0;
const slideInterval = 5000; // 5 seconds

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
        if (i === index) {
            setTimeout(() => {
                slide.style.opacity = 1;
            }, 10); // Small delay to trigger transition
        } else {
            slide.style.opacity = 0;
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

window.onload = () => {
    showSlide(currentIndex);
    setInterval(nextSlide, slideInterval);
};










