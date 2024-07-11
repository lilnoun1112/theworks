// menu-toggle.js
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.sandwich').addEventListener('click', function() {
        document.querySelector('.mobile-menu').classList.toggle('show');
        document.querySelectorAll('.hamburger--spring').forEach(function(element) {
            element.classList.toggle('is-active');
        });
    });
});

