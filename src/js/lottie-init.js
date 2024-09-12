document.addEventListener('DOMContentLoaded', function() {
    var animation = lottie.loadAnimation({
        container: document.getElementById('lottie-sandwich'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/images/sandwich.json' // the path to the animation json
    });

    document.querySelector('.sandwich').addEventListener('click', function() {
        document.querySelector('.mobile-menu').classList.toggle('show');
    });
});
