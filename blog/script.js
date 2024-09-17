// $(document).ready(function(){
//     $('.owl-carousel').owlCarousel({
//         loop:true,
//         margin:10,
//         dots:false,
//         nav:true,
//         autoplay:true,
//         smartSpeed: 3000,
//         autoplayTimeout:7000,
//         responsive:{
//             0:{
//                 items:1
//             },
//             600:{
//                 items:2
//             },
//             1000:{
//                 items:3
//             }
//         }
//     });
// });  /////////



// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     dots:false,
//     nav:true,
//     autoplay:true,   
//     smartSpeed: 3000, 
//     autoplayTimeout:7000,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:2
//         },
//         1000:{
//             items:3
//         }
//     }
// });


// document.querySelector('.read-more-btn').addEventListener('click', function() {
//     const moreContent = document.querySelector('.more-content');
//     const dots = document.querySelector('.dots');
//     const btnText = this;  // Avoid re-querying the button
    
//     if (moreContent.style.display === 'none' || !moreContent.style.display) {
//         moreContent.style.display = 'inline';  // 'inline' could be changed to a more suitable display property based on your content
//         dots.style.display = 'none';
//         btnText.innerHTML = 'Read Less';
//     } else {
//         moreContent.style.display = 'none';
//         dots.style.display = 'inline';
//         btnText.innerHTML = 'Read More';
//     }
// });///////








// document.querySelector('.read-more-btn').addEventListener('click', function() {
//     const moreContent = document.querySelector('.more-content');
//     const dots = document.querySelector('.dots');
//     const btnText = document.querySelector('.read-more-btn');
    
//     if (moreContent.style.display === 'none') {
//         moreContent.style.display = 'inline';
//         dots.style.display = 'none';
//         btnText.innerHTML = 'Read Less';
//     } else {
//         moreContent.style.display = 'none';
//         dots.style.display = 'inline';
//         btnText.innerHTML = 'Read More';
//     }
// });









$(document).ready(function() {
    // Owl Carousel Initialization
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        autoplay: true,
        smartSpeed: 3000,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // Read More/Read Less Functionality
    document.querySelector('.read-more-btn').addEventListener('click', function() {
        const moreContent = document.querySelector('.more-content');
        const dots = document.querySelector('.dots');
        const btnText = this; // Use 'this' to refer to the button directly

        if (moreContent.style.display === 'none' || !moreContent.style.display) {
            moreContent.style.display = 'inline';
            dots.style.display = 'none';
            btnText.innerHTML = 'Read Less';
        } else {
            moreContent.style.display = 'none';
            dots.style.display = 'inline';
            btnText.innerHTML = 'Read More';
        }
    });
});

