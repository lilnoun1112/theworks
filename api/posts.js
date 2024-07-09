// api/posts.js

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; // For parsing Markdown front matter

const postsDirectory = path.join(process.cwd(), 'content/posts');

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Get list of all post files
    const fileNames = fs.readdirSync(postsDirectory);

    // Fetch metadata for each post
    const posts = fileNames.map((fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent); // Extract front matter
      return {
        slug: fileName.replace(/\.md$/, ''), // Remove file extension for slug
        ...data, // Include other front matter fields (e.g., title, tag, preview)
      };
    });

    // Send posts data as response
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
}
