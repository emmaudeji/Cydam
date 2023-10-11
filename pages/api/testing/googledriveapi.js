import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { google } from "googleapis";
import path from 'path';
import fs  from 'fs';

export default async function handler(req, res) {

    const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
    const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
    const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI
    const GOOGLE_OAUTH_REFRESH_TOKEN = process.env.GOOGLE_OAUTH_REFRESH_TOKEN
   
    if (req.method === 'POST') {

    try {
        const newItem = req.body;

        const oauth2Client = new google.auth.OAuth2(
            GOOGLE_CLIENT_ID,
            GOOGLE_CLIENT_SECRET,
            GOOGLE_REDIRECT_URI,
        )

        oauth2Client.setCredentials({refresh_token: GOOGLE_OAUTH_REFRESH_TOKEN})

        const drive = google.drive({
            version: 'v3', 
            auth: oauth2Client
        })

        const filePath = path.join(__dirname, 'city.webp')

        async function uploadfile() {
            try {
                const response = await drive.files.create({
                    requestBody: {
                        name: 'housesss.webp',
                        mimeType: 'image/webp'
                    },
                    media: {
                        mimeType: 'image/webp',
                        body: fs.createReadStream(filePath)
                    }
                })
                
                console.log('UPLOADED FILE RESPONSE==', response)
                return response
            } catch (error) {
                console.log('UPLOADED FILE ERROR==', error)
                return error
            }
        }

        const uploadResponse = uploadfile()



      //   // Create a new item

  

        console.log('NewItem==', newItem,  'Result===', uploadResponse)
        res.status(200).json('Success',  uploadResponse);
        // res.status(200).json(newRow.map((item)=>item.toObject()));
      
      } catch (error) {
        console.error("Error fetching data:", error.message);
        res.status(500).json({ error: "An error occurred while fetching data", error });
      }


  } 
}
