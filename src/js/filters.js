// filters.js
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.button-filter');
    const blogCards = document.querySelectorAll('.blog-card');
    const publicationsContainer = document.querySelector('.publications-container');
  
    // Function to apply filter based on the hash
    const applyFilterFromHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const button = Array.from(filterButtons).find(btn => btn.getAttribute('data-filter').toLowerCase() === hash);
  
      if (button) {
        button.click(); // Simulate a click to apply the filter
      } else {
        document.querySelector('.button-filter[data-filter="all"]').click(); // Default to "All" if no valid hash
      }
    };
  
    // Apply the filter from the hash on initial page load
    applyFilterFromHash();
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
  
        // Update the URL hash without reloading the page
        window.location.hash = filter.toLowerCase();
  
        // Remove selected class and underline-selected from all buttons and their underlines
        filterButtons.forEach(btn => {
          btn.classList.remove('selected');
          btn.querySelector('.underline').classList.remove('underline-selected');
        });
  
        // Add selected class to the clicked button and underline-selected to its underline
        button.classList.add('selected');
        button.querySelector('.underline').classList.add('underline-selected');
  
        // Filter the blog cards
        const filteredCards = Array.from(blogCards).filter(card => {
          const tags = card.getAttribute('data-tags').split(',');
          return filter === 'all' || tags.includes(filter);
        });
  
        // Clear the publications container
        publicationsContainer.innerHTML = '';
  
        // Rebuild the publications container with filtered cards in rows of 3
        let rowCount = 0;
        let currentUl = null;
  
        filteredCards.forEach(card => {
          if (rowCount % 3 === 0) {
            if (currentUl) {
              publicationsContainer.appendChild(currentUl);
            }
            currentUl = document.createElement('ul');
            currentUl.classList.add('teaser-container', 'blog');
          }
  
          const li = document.createElement('li');
          li.classList.add('blog-card');
          li.innerHTML = card.innerHTML;
          currentUl.appendChild(li);
  
          rowCount++;
        });
  
        // Append the last ul if it has any children
        if (currentUl && currentUl.children.length > 0) {
          publicationsContainer.appendChild(currentUl);
        }
  
        // Adjust text box heights after filtering
        if (window.innerWidth >= 880) {
          adjustTextBoxHeights();
        }
      });
    });
  });
  