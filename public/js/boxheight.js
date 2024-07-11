// Function to adjust height of all .teas-txt-inner and .teas2-txt-inner elements to match the tallest one within their respective groups
function adjustTextBoxHeights() {
    adjustInnerBoxHeights('.teas-txt-inner');
    adjustInnerBoxHeights('.teas2-txt-inner');
}

// Function to adjust height of all elements with a specific class to match the tallest one
function adjustInnerBoxHeights(className) {
    const innerBoxes = document.querySelectorAll(className);
    let maxHeight = 0;

    // Find the maximum height
    innerBoxes.forEach(box => {
        box.style.height = 'auto'; // Reset height to auto to calculate the natural height
        if (box.clientHeight > maxHeight) {
            maxHeight = box.clientHeight;
        }
    });

    // Set all boxes to the maximum height found
    innerBoxes.forEach(box => {
        box.style.height = maxHeight + 'px';
    });
}

// Call adjustTextBoxHeights initially and on window resize
document.addEventListener('DOMContentLoaded', function() {
    adjustTextBoxHeights(); // Initial adjustment
    window.addEventListener('resize', adjustTextBoxHeights); // Adjust on window resize
});
