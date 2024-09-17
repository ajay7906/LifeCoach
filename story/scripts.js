document.addEventListener('DOMContentLoaded', () => {
    // Get all the elements to animate
    const imageContent = document.querySelector('.image-content img');
    const textContent = document.querySelector('.text-content');
    const main1Text = document.querySelector('.main1-text');
    const main1Image = document.querySelector('.main1-image img');
    const main1TextBelow = document.querySelector('.main1-text-below');

    // Function to add 'in-view' class when elements are in view
    function handleScroll() {
        const scrollPosition = window.scrollY + window.innerHeight;

        // Check if image-content is in view
        if (imageContent.getBoundingClientRect().top < scrollPosition) {
            imageContent.style.transform = 'translateY(0)';
        }

        // Check if text-content is in view
        if (textContent.getBoundingClientRect().top < scrollPosition) {
            textContent.style.transform = 'translateY(0)';
        }

        // Check if main1-text is in view
        if (main1Text.getBoundingClientRect().top < scrollPosition) {
            main1Text.style.transform = 'translateY(0)';
        }

        // Check if main1-image is in view
        if (main1Image.getBoundingClientRect().top < scrollPosition) {
            main1Image.style.transform = 'translateY(0)';
        }

        // Check if main1-text-below is in view
        if (main1TextBelow && main1TextBelow.getBoundingClientRect().top < scrollPosition) {
            main1TextBelow.style.transform = 'translateY(0)';
        }
    }

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Initial check in case elements are already in view on load
    handleScroll();
});






