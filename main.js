const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();












// testomonial
// const slides = document.querySelectorAll('.testimonial-slide');
// let currentIndex = 0;
// const slideInterval = 5000; // 5 seconds

// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.style.display = i === index ? 'block' : 'none';
//         if (i === index) {
//             setTimeout(() => {
//                 slide.style.opacity = 1;
//             }, 10); // Small delay to trigger transition
//         } else {
//             slide.style.opacity = 0;
//         }
//     });
// }

// function nextSlide() {
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
// }

// window.onload = () => {
//     showSlide(currentIndex);
//     setInterval(nextSlide, slideInterval);
// };





//     document.getElementById('scrollToForm').addEventListener('click', function() {
//         document.querySelector('.form-container').scrollIntoView({
//             behavior: 'smooth'
//         });
//     });













//     // testomonials
//     const slides = document.querySelectorAll('.testimonial-slide');
// const dots = document.querySelectorAll('.dot');
// let currentIndex = 0;
// const slideInterval = 5000; // 5 seconds

// // Show the slide based on the index
// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.style.display = i === index ? 'block' : 'none';
//         if (i === index) {
//             setTimeout(() => {
//                 slide.style.opacity = 1;
//             }, 10); // Small delay to trigger transition
//         } else {
//             slide.style.opacity = 0;
//         }
//     });
//     updateDots(index); // Update the dots when slide changes
// }

// // Update the dots to highlight the active one
// function updateDots(index) {
//     dots.forEach((dot, i) => {
//         dot.classList.toggle('active', i === index);
//     });
// }

// // Go to the next slide
// function nextSlide() {
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
// }

// // Go to the previous slide
// function prevSlide() {
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     showSlide(currentIndex);
// }

// // Set current slide when dot is clicked
// function currentSlide(index) {
//     currentIndex = index;
//     showSlide(currentIndex);
// }

// window.onload = () => {
//     showSlide(currentIndex);
//     setInterval(nextSlide, slideInterval);
// };

// // Add event listeners to dots for manual slide navigation
// dots.forEach((dot, i) => {
//     dot.addEventListener('click', () => currentSlide(i));
// });







// // popups
// window.onload = function() {
//     // Show the popup when the page loads
//     document.getElementById("popup").classList.add("active");
//   }
  
//   // Close popup when the user clicks on the close button
//   document.getElementById("close-popup").onclick = function() {
//     document.getElementById("popup").classList.remove("active");
//   }
  
//   // Close popup when the user submits the form
//   document.querySelector('form').onsubmit = function(event) {
//     event.preventDefault(); // Prevent form submission for this example
//     document.getElementById("popup").classList.remove("active");
//     alert("Form Submitted!"); // Example alert
//   }


  











window.addEventListener('load', () => {
    // Show the popup when the page loads
    document.getElementById("popup").classList.add("active");

    // Testimonials logic
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
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
        updateDots(index);
    }

    function updateDots(index) {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    function currentSlide(index) {
        currentIndex = index;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);
    setInterval(nextSlide, slideInterval);

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => currentSlide(i));
    });
});

// Close popup when the user clicks on the close button
document.getElementById("close-popup").onclick = function() {
    document.getElementById("popup").classList.remove("active");
}

// Close popup when the user submits the form
document.querySelector('form').onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission for this example
    document.getElementById("popup").classList.remove("active");
    alert("Form Submitted!");
}
