// js/fetchAndPopulate.js

async function fetchAndPopulate() {
  try {
      const response = await fetch('/content/posts/list.json'); // Assuming a JSON file listing Markdown files
      const markdownFiles = await response.json(); // JSON array of Markdown filenames

      markdownFiles.forEach(async (filename, index) => {
          const postResponse = await fetch(`/content/posts/${filename}`); // Fetch individual Markdown file
          const markdownText = await postResponse.text();

          // Parse Markdown to HTML (assuming you're using a library like marked.js)
          const htmlContent = marked(markdownText);

          // Example: Extract metadata from Markdown frontmatter (if applicable)
          const { title, tag, image, preview } = parseFrontmatter(markdownText);

          // Populate HTML elements with content
          const teaserCard = document.querySelector(`.teaser-card.teaser-${index + 1}`);
          if (teaserCard) {
              teaserCard.querySelector('.teaser-image img').src = image;
              teaserCard.querySelector('.tag').textContent = tag;
              teaserCard.querySelector('.teaser-textbox h3').textContent = title;
              teaserCard.querySelector('.teaser-textbox p').textContent = preview;
              teaserCard.querySelector('.button-card').href = `/posts/${filename.replace('.md', '.html')}`; // Example link
          }
      });
  } catch (error) {
      console.error('Error fetching and populating Markdown content:', error);
  }
}

// Helper function to parse frontmatter (if applicable)
function parseFrontmatter(markdownText) {
  // Implement logic to parse frontmatter from Markdown text
  // Example: Assuming frontmatter is at the beginning of Markdown files
  const frontmatter = marked.lexer(markdownText)[0]; // Assuming frontmatter is at the start
  const metadata = {};
  if (frontmatter.type === 'front_matter') {
      Object.assign(metadata, frontmatter.data);
  }
  return metadata;
}

// Call the function to fetch and populate on page load
fetchAndPopulate();
