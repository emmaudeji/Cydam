import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export default async function handler(req, res) {
   if (req.method === 'POST') {

    try {    
      const serviceAccountAuth = new JWT({
        email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        scopes: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive.file']
      });

      const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
      
        await doc.loadInfo(); // loads document properties and worksheets
          console.log(`Titleeeee: ${doc.title}`);

        const sheet = doc.sheetsByIndex[0]; // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`


        const newItem = req.body;     
console.log(newItem)
const ar = [{"ogImg":"d","img":"d","title":"","date":"f","author":"f","category":"f","highlight":"f","content":"e","tags":"r, e","images":"/gg"}]

        const newRow = await sheet.addRows(newItem);

        res.status(200).json(newRow.map((item)=>item.toObject()));
      
      } catch (error) {
        console.error("Error fetching data:", error.message);
        res.status(500).json({ message: error.message, error });
      }


  } 
}
