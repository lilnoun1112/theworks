// fetchPosts.js

// Function to fetch posts from Decap CMS
async function fetchPosts() {
  try {
      const response = await fetch('/admin/api/collections/get/posts', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer YOUR_API_TOKEN', // Replace with your actual API token
          },
          body: JSON.stringify({
              filter: {}, // Optional: Add filters if needed
              populate: 1, // Optional: Include related fields
          }),
      });

      if (!response.ok) {
          throw new Error('Failed to fetch posts');
      }

      const data = await response.json();
      return data.entries;
  } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
  }
}

export { fetchPosts };

  