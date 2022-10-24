// import { getRepository } from "typeorm";

import type { NextApiRequest, NextApiResponse } from 'next'
// import dbConnection from "../../server/server";
import { UserController } from "../../server/user/userController";


// typeof window ==='undefined' ? dbConnection():null
export default async function getAllUsers (
    req: NextApiRequest,
    res: NextApiResponse<any>
  ){
    try{
const data  = await UserController.getAllUsers()
console.log('dataaaaaaaaaa',data)
      res.status(200).json(data)
    }catch (error) {
      console.error(error);
     
    }
}


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction




