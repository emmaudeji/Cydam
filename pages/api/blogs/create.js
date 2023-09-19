import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

import { google } from "googleapis";

const zlib = require('zlib')

async function uploadImageToGoogleDrive(imageData) {
  try {

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
  
    
    // Implement this function to get Google Drive authentication
    const drive = google.drive({ version: 'v3', auth });
  
    const uploadResponse = await drive.files.create({
      requestBody: {
        name: imageData.name, // Use the original image file name
      },
      media: {
        mimeType: imageData.type, // Use the original image MIME type
        body: imageData, // Use the raw File object as the media body
      },
    });
  
    return uploadResponse.data.webViewLink; // Return the shareable link to the uploaded image
    
  } catch (error) {
    console.error("Error fetching data:", error.message);
    
  }
 
}

export default async function handler(req, res) {
   if (req.method === 'POST') {

    try {

      
      // const serviceAccountAuth = new JWT({
      //   email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      //   key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      //   scopes: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive.file']
      // });

      const auth = new google.auth.JWT({
        email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      //   const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
      

      //   await doc.loadInfo(); // loads document properties and worksheets
      //     console.log(`Titleeeee: ${doc.title}`);

      //   const sheet = doc.sheetsByIndex[0]; // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`

      //   // Create a new item
        const newItem = req.body;
        // const imageData = newItem[0].img

        // const driveLink = await uploadImageToGoogleDrive(imageData);
        const drive = google.drive({ version: 'v3', auth });
  
        const uploadResponse = await drive.files.create({
          requestBody: {
            name: 'Test',
            mimeType: 'text/plain'
          },
          media: {
            mimeType: 'text/plain',
            body: 'Hello World'
          }
        });
      
       

      //   // append rows
      //   const newRow = await sheet.addRows(newItem);

        console.log('NewItem==', newItem,  'Result===', uploadResponse)
        res.status(200).json('Success',  'imageData');
        // res.status(200).json(newRow.map((item)=>item.toObject()));
      
      } catch (error) {
        console.error("Error fetching data:", error.message);
        res.status(500).json({ error: "An error occurred while fetching data", error });
      }


  } 
}
