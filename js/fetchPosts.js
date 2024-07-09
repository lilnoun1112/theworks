// js/fetchPosts.js

// Fetch posts from serverless function
fetch('/api/posts')
  .then(response => response.json())
  .then(posts => {
    // Iterate over each post and populate corresponding teaser-card elements
    posts.forEach((post, index) => {
      const teaserCard = document.querySelector(`.teaser-card.teaser-${index + 1}`);

      // Populate teaser-image div with post image
      const teaserImage = teaserCard.querySelector('.teaser-image img');
      teaserImage.src = post.image;
      teaserImage.alt = post.title;

      // Populate tag div with post tag
      const tag = teaserCard.querySelector('.teaser-image .tag');
      tag.textContent = post.tag;

      // Populate teaser-textbox div with post title, preview, and read more link
      const teaserTextbox = teaserCard.querySelector('.teaser-textbox');
      teaserTextbox.querySelector('h3').textContent = post.title;
      teaserTextbox.querySelector('p').textContent = post.preview;
      teaserTextbox.querySelector('.button-card').href = post.url;
    });
  })
  .catch(error => console.error('Error fetching and displaying posts:', error));
