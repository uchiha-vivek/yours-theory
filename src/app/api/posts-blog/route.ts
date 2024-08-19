// import { NextApiRequest, NextApiResponse } from "next";
// import type { NextResponse,NextRequest } from "next/server";

// interface PostData  {
//      title:string,
//      content:string
// }

// export default async function handler(req:NextApiRequest,res:NextApiResponse){
//     if(req.method==='POST'){
//           const{title,content}:PostData= req.body
//           res.status(200).json({message:'Post saved',title,content})

//     }else{
//         res.status(405).end()
//     }
// }