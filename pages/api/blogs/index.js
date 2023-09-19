// fetch all blogs

import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';


export default async function handler(req, res) {

    // Retrieve all items
    try {
      const serviceAccountAuth = new JWT({
   
          email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
          key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
          scopes: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive.file']
        });
    
        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
       
    
      await doc.loadInfo(); // loads document properties and worksheets
        console.log(`Titleeeee: ${doc.title}`);

      const sheet = doc.sheetsByIndex[1]; // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`
  
      // Read rows
      const rows = await sheet.getRows(); // You can pass in { limit, offset } if needed

      const rowList = rows.map((item) => item.toObject());
  
      res.status(200).json({ rowList });
      } catch (error) {
        console.error("Error fetching data:", error.message);
        res.status(500).json({ error: "An error occurred while fetching data" });
      }

}
