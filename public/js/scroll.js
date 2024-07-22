document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    const totalImages = 52;
    const scrollContainer = document.querySelector('.scroll-container');
    const loadingOverlay = document.getElementById('loading-overlay');
    const images = [];

    // Function to preload images
    function preloadImages() {
        return new Promise((resolve, reject) => {
            let loadedImages = 0;
            for (let i = 1; i <= totalImages; i++) {
                const img = new Image();
                img.src = `images/${String(i).padStart(2, '0')}.jpg`;
                img.onload = () => {
                    loadedImages++;
                    if (loadedImages === totalImages) {
                        resolve();
                    }
                };
                img.onerror = () => reject(`Failed to load image ${img.src}`);
                images.push(img);
            }
        });
    }

    // Function to update background image based on scroll position
    function updateBackground() {
        const scrollY = window.scrollY;
        const containerHeight = scrollContainer.offsetHeight - window.innerHeight;
        const scrollFraction = scrollY / containerHeight;
        const imageIndex = Math.min(
            totalImages - 1,
            Math.floor(scrollFraction * totalImages)
        );
        const newImage = `url(images/${String(imageIndex + 1).padStart(2, '0')}.jpg)`;
        if (hero.style.backgroundImage !== newImage) {
            hero.style.backgroundImage = newImage;
        }
    }

    // Preload images and hide loading overlay once done
    preloadImages().then(() => {
        loadingOverlay.style.display = 'none';
        window.addEventListener('scroll', updateBackground);
    }).catch((error) => {
        console.error('Failed to preload images:', error);
    });
});
