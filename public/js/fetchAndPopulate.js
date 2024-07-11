async function fetchAndPopulate() {
  try {
      const response = await fetch('/content/posts/list.json'); // Fetch list of Markdown files
      const fileList = await response.json(); // Parse JSON response to get array of filenames

      for (const filename of fileList) {
          const markdownResponse = await fetch(filename);
          const markdownText = await markdownResponse.text();

          // Parse Markdown front matter (assuming it's JSON or YAML)
          const frontMatter = parseMarkdownFrontMatter(markdownText);
          console.log(frontMatter); // Log to inspect the parsed front matter

          // Populate HTML elements based on front matter data
          populateTeaserCard(frontMatter);
      }
  } catch (error) {
      console.error('Error fetching and populating Markdown content:', error);
  }
}

function parseMarkdownFrontMatter(markdownText) {
  const start = markdownText.indexOf('---');
  const end = markdownText.indexOf('---', start + 3);
  const frontMatterText = markdownText.slice(start + 3, end).trim();
  return YAML.parse(frontMatterText); // Assuming you're using a YAML parser
}

function populateTeaserCard(frontMatter) {
  // Update HTML elements based on front matter properties
  const teaserCard = document.querySelector('.teaser-card');
  teaserCard.querySelector('img').src = frontMatter.image;
  teaserCard.querySelector('.tag').textContent = frontMatter.tag;
  teaserCard.querySelector('h3').textContent = frontMatter.title;
  teaserCard.querySelector('p').textContent = frontMatter.preview;
}

// Execute the function on page load or wherever appropriate
fetchAndPopulate();



  