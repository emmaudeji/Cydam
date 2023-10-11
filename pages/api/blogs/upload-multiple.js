import multer from 'multer';
import { google } from 'googleapis';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export default async (req, res) => {

//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

  const files = req.files;
  console.log('FILESS=',files)

  if (!files || files.length === 0) {
    return res.status(400).json({ message: 'No files uploaded' });
  }

  const downloadLinks = [];
  const uploadErrors = [];

  // Initialize the Google Drive API and authentication
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI,
  );

  oauth2Client.setCredentials({ refresh_token: process.env.GOOGLE_OAUTH_REFRESH_TOKEN });

  const drive = google.drive({
    version: 'v3',
    auth: oauth2Client,
  });

  for (const file of files) {
    try {
      const response = await drive.files.create({
        requestBody: {
          name: file.originalname,
          mimeType: file.mimetype,
        },
        media: {
          mimeType: file.mimetype,
          body: file.buffer,
        },
      });

      await drive.permissions.create({
        fileId: response.data.id,
        requestBody: {
          role: 'reader',
          type: 'anyone',
        },
      });

      const downloadLink = `https://drive.google.com/uc?export=view&id=${response.data.id}`;
      downloadLinks.push(downloadLink);
    } catch (error) {
      console.error('Error uploading file:', error.message);
      uploadErrors.push(error.message);
    }
  }

  if (uploadErrors.length > 0) {
    return res.status(500).json({ error: 'File upload failed', uploadErrors });
  }

  res.status(200).json({ message: 'Files uploaded successfully', downloadLinks });
};
