// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default function handler(req, res) {
  console.log(req.query);
  fs.readFile("pages/api/json/dashboard.json",'utf-8',(err,data)=>{
    console.log(err);
    res.status(200).json(JSON.parse(data))
  })
}
