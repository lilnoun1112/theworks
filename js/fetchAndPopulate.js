// fetchAndPopulate.js

async function fetchAndPopulate() {
    try {
      // Fetch list of Markdown files
      const response = await fetch('/content/posts/list.json'); // Adjust path based on your project structure
      if (!response.ok) {
        throw new Error(`Failed to fetch list.json (${response.status} ${response.statusText})`);
      }
      const fileList = await response.json(); // Parse JSON response
  
      // Check if there are any files to process
      if (fileList.length === 0) {
        console.warn('No Markdown files found in list.json');
        return;
      }
  
      // Loop through the teaser cards already defined in HTML
      const teaserCards = document.querySelectorAll('.teaser-card');
      teaserCards.forEach(async (teaserCard, index) => {
        try {
          // Fetch content of the Markdown file corresponding to this teaser card
          const filename = fileList[index];
          const postResponse = await fetch(`/content/posts/${filename}`); // Adjust path based on your project structure
          if (!postResponse.ok) {
            throw new Error(`Failed to fetch ${filename} (${postResponse.status} ${postResponse.statusText})`);
          }
          const markdownContent = await postResponse.text(); // Get Markdown content
  
          // Parse frontmatter if needed (example)
          const frontmatter = parseFrontmatter(markdownContent);
  
          // Populate the teaser card with Markdown content
          const teaserImage = teaserCard.querySelector('.teaser-image');
          const img = teaserImage.querySelector('img');
          img.src = frontmatter.image || 'default-image-url.jpg'; // Example
          const tag = teaserImage.querySelector('.tag');
          tag.textContent = frontmatter.tag || 'Default Tag'; // Example
  
          const teaserTextbox = teaserCard.querySelector('.teaser-textbox');
          const h3 = teaserTextbox.querySelector('h3');
          h3.textContent = frontmatter.title || 'Default Title'; // Example
          const p = teaserTextbox.querySelector('p');
          p.textContent = frontmatter.preview || 'Default Preview'; // Example
          const readMoreLink = teaserTextbox.querySelector('.button-card');
          readMoreLink.href = `/posts/${filename}`; // Example link to full post
  
        } catch (error) {
          console.error(`Error fetching and populating ${filename}:`, error);
        }
      });
  
    } catch (error) {
      console.error('Error fetching list.json:', error);
    }
  }
  
  // Example function to parse frontmatter
  function parseFrontmatter(markdownContent) {
    const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/;
    const match = markdownContent.match(frontmatterRegex);
    if (match) {
      const frontmatterString = match[1];
      return JSON.parse(frontmatterString);
    }
    return {};
  }
  
  // Call fetchAndPopulate when DOM content is loaded
  document.addEventListener('DOMContentLoaded', fetchAndPopulate);
  
