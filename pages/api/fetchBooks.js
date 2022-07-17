//  Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import * as fs from 'fs';

// export default function handler(req, res) {
//   fs.readFile(`./pages/api/json/books/${req.query.bookid}.json`,'utf-8',(err,data)=>{
//     res.status(200).json(JSON.parse(data))
//     console.log(err);
//   })
// }


import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'json');
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + `/${req.query.bookid}.json`, 'utf8');
  //Return the content of the data file in json format
  res.status(200).json(JSON.parse(fileContents));
}