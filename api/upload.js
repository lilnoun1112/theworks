import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';

// This will make sure the function runs in the serverless environment
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const form = new IncomingForm();

  form.uploadDir = path.join(process.cwd(), '/tmp');
  form.keepExtensions = true;

  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'Error parsing file' });
    }

    // Handle file chunks
    // Implement logic to handle chunked uploads and reassemble the file

    res.status(200).json({ message: 'File uploaded successfully' });
  });
}
