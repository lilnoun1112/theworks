document.addEventListener("DOMContentLoaded", async () => {
  try {
      const response = await fetch("/content/posts/list.json");
      if (!response.ok) {
          throw new Error(`Error fetching list.json: ${response.status} ${response.statusText}`);
      }
      const filenames = await response.json();

      const teaserCards = document.querySelectorAll('.teaser-card');

      for (let i = 0; i < teaserCards.length && i < filenames.length; i++) {
          const teaserCard = teaserCards[i];
          const filename = filenames[i]; // Assume list.json is correctly structured

          const mdResponse = await fetch(`/content/posts/${filename}`);
          if (!mdResponse.ok) {
              throw new Error(`Error fetching ${filename}: ${mdResponse.status} ${mdResponse.statusText}`);
          }
          const mdText = await mdResponse.text();

          // Parse Markdown Front Matter and content
          const { data, content } = parseMarkdown(mdText);

          // Update teaser card elements
          teaserCard.querySelector('.teaser-image img').setAttribute('src', data.image || ''); // Update with image src
          teaserCard.querySelector('.tag').textContent = data.tag || ''; // Update with tag content
          teaserCard.querySelector('h3').textContent = data.title || ''; // Update with title content
          teaserCard.querySelector('p').textContent = data.preview || ''; // Update with preview content
          teaserCard.querySelector('.button-card').setAttribute('href', `/posts/${filename.replace('.md', '')}`); // Update read more link
      }
  } catch (error) {
      console.error(`Error fetching and populating Markdown content: ${error.message}`);
  }
});

function parseMarkdown(mdText) {
  const lines = mdText.split('\n');
  let frontMatter = '';
  let content = '';

  // Find where front matter ends
  let index = 0;
  for (; index < lines.length; index++) {
      if (lines[index].trim() === '---') {
          frontMatter = lines.slice(0, index + 1).join('\n').trim();
          content = lines.slice(index + 1).join('\n').trim();
          break;
      }
  }

  // Parse front matter into JSON object
  let data = {};
  try {
      data = JSON.parse(frontMatter.replace(/---/g, ''));
  } catch (error) {
      console.error(`Error parsing front matter: ${error.message}`);
  }

  return { data, content };
}

  