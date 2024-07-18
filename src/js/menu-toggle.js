// menu-toggle.js
document.addEventListener('DOMContentLoaded', function() {
    const sandwich = document.querySelector('.sandwich');
    const mobileMenu = document.querySelector('.mobile-menu');
    const hamburgerSpring = document.querySelectorAll('.hamburger--spring');
    const contactButton = document.getElementById('contactbutton');

    function toggleMenu() {
        mobileMenu.classList.toggle('show');
        hamburgerSpring.forEach(function(element) {
            element.classList.toggle('is-active');
        });
    }

    function closeMenu() {
        mobileMenu.classList.remove('show');
        hamburgerSpring.forEach(function(element) {
            element.classList.remove('is-active');
        });
    }

    sandwich.addEventListener('click', toggleMenu);

    if (contactButton) {
        contactButton.addEventListener('click', closeMenu);
    }
});

