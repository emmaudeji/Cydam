// pages/api/upload.js

// import multer from 'multer';
// import { NextApiRequest, NextApiResponse } from 'next';
// const storage = multer.memoryStorage(); 
// // const upload = multer({ dest: 'public/' });
// const upload = multer({ storage: storage }).array('files', 5);

// export const config = {
//   api: {
//     bodyParser: false, // Disable automatic body parsing
//   },
// };

export default async function handler(req, res) {
    // upload(req, res, (err) => {
    //     if (err) {
    //       return res.status(400).json({ error: 'File upload failed', uploadErrors: [err.message] });
    //     }
    
    //     // Access the uploaded files through req.files
    //     const files = req.files;

    // // Process the file (e.g., save to storage, return response)
    // // ...

    const files = req.body

    // const formData = new FormData();
    // files.forEach((file, i) => {
    //   formData.append(`file-${i}`, file, file.name);
    // });

    console.log('FILSESS', files)

    res.status(200).json({ message: 'File uploaded successfully', fileInfo: files });

}
