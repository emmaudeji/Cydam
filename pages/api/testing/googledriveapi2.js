import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { google } from "googleapis";
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { promisify } from 'util';

const upload = multer({
  dest: path.join(process.cwd(), 'public/uploads'),
  fileFilter: (req, file, callback) => {
    const allowedTypes = [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/bmp',
      'image/webp',
      'image/tiff',
      'image/svg+xml',
      'image/heif',
    ];
    const maxSize = 10 * 1024 * 1024;

    if (!allowedTypes.includes(file.mimetype) || file.size > maxSize) {
      return callback(new Error('Invalid file type or size'));
    }

    callback(null, true);
  },
});

const unlinkAsync = promisify(fs.unlink);

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function uploadfile(file) {

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI,
  );

  oauth2Client.setCredentials({ refresh_token: process.env.GOOGLE_OAUTH_REFRESH_TOKEN });

  try {
    const drive = google.drive({
      version: 'v3',
      auth: oauth2Client,
    });

    const response = await drive.files.create({
      requestBody: {
        name: file.originalname,
        mimeType: file.mimetype,
      },
      media: {
        mimeType: file.mimetype,
        body: fs.createReadStream(file.path),
      },
    });

    const readable = await drive.permissions.create({
      fileId: response.data.id,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });

    return `https://drive.google.com/uc?export=view&id=${response.data.id}`;
  } catch (error) {
    console.error('UPLOADED FILE ERROR:', error);
    throw error;
  }
}

function generateUniqueID() {
  const timestamp = new Date().getTime();
  const randomChars = Math.random().toString(36).substring(2, 8);
  return { id: `blog${timestamp}-${randomChars}`, Timestamp: timestamp };
}

export default async (req, res) => {
  try {
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive.file'],
    });

    upload.array('files')(req, res, async (err) => {
      if (err) {
        console.error('Error uploading files:', err);
        return res.status(400).json({ message: 'Error uploading files', error: err.message });
      }

      const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);

      await doc.loadInfo();
      const sheet = doc.sheetsByIndex[0];

      const { files, body } = req;
      const uploadedFilesUrl = [];

      for (const file of files) {
        try {
          const uploadResponse = await uploadfile(file);
          uploadedFilesUrl.push(uploadResponse);
          await unlinkAsync(file.path);
        } catch (error) {
          console.error('Error uploading file:', error);
          return res.status(500).json({ message: 'Error uploading file', error: error.message });
        }
      }

      const newRowData = {
        'images': uploadedFilesUrl.join(', '),
        'title': body.title,
        'date': body.date,
        'author': body.author,
        'category': body.category,
        'highlight': body.highlight,
        'content': body.content,
        'tags': body.tags,
        'ogImg': uploadedFilesUrl[0],
        'Timestamp': generateUniqueID().Timestamp,
        'id': generateUniqueID().id,
      };

      const newRow = await sheet.addRows([newRowData]);

      res.status(200).json({ message: 'Files uploaded successfully', uploadedFilesUrl, newRow: newRow.map((item) => item.toObject()) });
    });
  } catch (error) {
    console.error('Error handling file uploads:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};
