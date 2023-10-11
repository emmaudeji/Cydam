// import multer from 'multer';
// import path from 'path';
// import fs from 'fs';
// import { promisify } from 'util';

// const upload = multer({
//   dest: path.join(process.cwd(), 'public/uploads'), // Define the upload destination
// });

// const unlinkAsync = promisify(fs.unlink);

// export const config = {
//   api: {
//     bodyParser: false, // Disabling the built-in bodyParser
//   },
// };

// export default async (req, res) => {
//   try {
//     // Use the 'upload' middleware to handle multiple file uploads
//     upload.array('files')(req, res, async (err) => {
//       if (err) {
//         console.error('Error uploading files:', err); // Log the error for debugging
//         return res.status(400).json({ message: 'Error uploading files' });
//       }

//       const { files } = req;

//       const uploadedFiles = [];

//       for (const file of files) {
//         // Perform any additional processing or validation here for each file

//         // Optionally, you can move or rename the uploaded file
//         // fs.renameSync(file.path, path.join(file.destination, file.originalname));

//         // Example: Delete the temporary file after processing
//         await unlinkAsync(file.path);

//         uploadedFiles.push({
//           originalname: file.originalname,
//           destination: file.destination,
//         });
//       }

//       res.status(200).json({ message: 'Files uploaded successfully', files: uploadedFiles });
//     });
//   } catch (error) {
//     console.error('Error handling file uploads:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };



import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { promisify } from 'util';

const upload = multer({
  dest: path.join(process.cwd(), 'public/uploads'), // Define the upload destination
  fileFilter: (req, file, callback) => {
    const allowedTypes = [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/bmp',
      'image/webp',
      'image/tiff',
      'image/svg+xml',
      'image/heif', // Add support for HEIC images
    ];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!allowedTypes.includes(file.mimetype)) {
      return callback(new Error('Invalid file type'));
    }

    if (file.size > maxSize) {
      return callback(new Error('File size exceeds 10MB'));
    }

    callback(null, true); // File is valid
  },
});

const unlinkAsync = promisify(fs.unlink);

export const config = {
  api: {
    bodyParser: false, // Disabling the built-in bodyParser
  },
};

export default async (req, res) => {
  try {
    // Use the 'upload' middleware to handle multiple file uploads
    upload.array('files')(req, res, async (err) => {
      if (err) {
        console.error('Error uploading files:', err); // Log the error for debugging
        return res.status(400).json({ message: 'Error uploading files' });
      }

      const { files } = req;

      const uploadedFiles = [];

      for (const file of files) {
        // Perform any additional processing or validation here for each file

        // Optionally, you can move or rename the uploaded file
        // fs.renameSync(file.path, path.join(file.destination, file.originalname));

        // Example: Delete the temporary file after processing
        await unlinkAsync(file.path);

        uploadedFiles.push({
          originalname: file.originalname,
          destination: file.destination,
        });
      }

      res.status(200).json({ message: 'Files uploaded successfully', files: uploadedFiles });
    });
  } catch (error) {
    console.error('Error handling file uploads:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
