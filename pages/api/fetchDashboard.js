// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default function handler(req, res) {
  fs.readFile("pages/api/json/dashboard.json",'utf-8',(err,data)=>{
    res.status(200).json(JSON.parse(data))
  })
}
