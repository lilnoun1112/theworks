// js/fetchAndPopulate.js

async function fetchMarkdownAndPopulate() {
  try {
      const response = await fetch('/content/posts/my-post.md'); // Adjust the path as per your directory structure
      const markdownText = await response.text();

      // Parse Markdown to HTML
      const htmlContent = marked(markdownText);

      // Extract metadata from frontmatter (optional)
      const { title, tag, image, preview } = parseFrontmatter(markdownText);

      // Populate HTML elements with content
      const teaserCard = document.querySelector('.teaser-card.teaser-1');
      if (teaserCard) {
          teaserCard.querySelector('.teaser-image img').src = image;
          teaserCard.querySelector('.tag').textContent = tag;
          teaserCard.querySelector('.teaser-textbox h3').textContent = title;
          teaserCard.querySelector('.teaser-textbox p').textContent = preview;
          teaserCard.querySelector('.button-card').href = '/posts/my-post.html'; // Example link
      }
  } catch (error) {
      console.error('Error fetching and populating Markdown content:', error);
  }
}

// Helper function to parse frontmatter
function parseFrontmatter(markdownText) {
  const frontmatter = marked.lexer(markdownText)[0]; // Assuming frontmatter is at the start
  const metadata = {};
  if (frontmatter.type === 'front_matter') {
      Object.assign(metadata, frontmatter.data);
  }
  return metadata;
}

// Call the function to fetch and populate on page load
fetchMarkdownAndPopulate();
