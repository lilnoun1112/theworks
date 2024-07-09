// fetchPosts.js

document.addEventListener("DOMContentLoaded", () => {
    async function fetchPosts() {
      try {
        const response = await fetch('/content/posts'); // Update the URL to your actual endpoint
        const posts = await response.json();
  
        const teaserCards = document.querySelectorAll('.teaser-card');
  
        posts.forEach((post, index) => {
          if (index < teaserCards.length) { // Ensure we don't exceed the number of available teaser cards
            const teaserCard = teaserCards[index];
            
            const teaserImage = document.createElement('div');
            teaserImage.classList.add('teaser-image');
            teaserImage.innerHTML = `
              <img src="${post.image}" alt="${post.title}">
              <div class="tag">${post.tag}</div>
            `;
  
            const teaserTextbox = document.createElement('div');
            teaserTextbox.classList.add('teaser-textbox');
            teaserTextbox.innerHTML = `
              <h3>${post.title}</h3>
              <p>${post.preview}</p>
              <a href="${post.url}" class="button-card">read more<div class="button-arrow"></div></a>
            `;
  
            // Clear existing content in teaser card and append new content
            teaserCard.innerHTML = '';
            teaserCard.appendChild(teaserImage);
            teaserCard.appendChild(teaserTextbox);
          }
        });
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }
  
    fetchPosts();
  });
  

  