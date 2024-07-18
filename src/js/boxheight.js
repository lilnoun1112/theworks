// Function to adjust height of all .teas-txt-inner and .teas2-txt-inner elements to match the tallest one within their respective rows
function adjustTextBoxHeights() {
    adjustInnerBoxHeights('.teas-txt-inner');
    adjustInnerBoxHeights('.teas2-txt-inner');
}

// Function to adjust height of all elements with a specific class to match the tallest one within their respective rows
function adjustInnerBoxHeights(className) {
    const innerBoxes = document.querySelectorAll(className);

    // Group inner boxes by rows
    const rows = groupByRow(innerBoxes);

    rows.forEach(row => {
        let maxHeight = 0;

        // Find the maximum height within the row
        row.forEach(box => {
            box.style.height = 'auto'; // Reset height to auto to calculate the natural height
            if (box.clientHeight > maxHeight) {
                maxHeight = box.clientHeight;
            }
        });

        // Set all boxes in the row to the maximum height found
        row.forEach(box => {
            box.style.height = maxHeight + 'px';
        });
    });
}

// Function to group elements by their rows
function groupByRow(elements) {
    const rows = [];
    let currentRow = [];
    let currentTop = elements[0].getBoundingClientRect().top;

    elements.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop !== currentTop) {
            rows.push(currentRow);
            currentRow = [];
            currentTop = boxTop;
        }

        currentRow.push(box);
    });

    if (currentRow.length > 0) {
        rows.push(currentRow);
    }

    return rows;
}

// Call adjustTextBoxHeights initially and on window resize
document.addEventListener('DOMContentLoaded', function() {
    adjustTextBoxHeights(); // Initial adjustment
    window.addEventListener('resize', adjustTextBoxHeights); // Adjust on window resize
});

