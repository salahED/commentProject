import { getRepository } from "typeorm";
import { User } from "../../server/user/user.entity";
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnection from '../../server/server'
dbConnection()
export const getAllUsers =async(
    req: NextApiRequest,
    res: NextApiResponse<User[]>
  )=>{
    const userRepository = getRepository(User);
    const usersList = await userRepository.find({
        // select: ["id", "username", "role"], //We dont want to send the passwords on response
        relations: [],
        // skip: (pagination - 1) * 6,
        order: {
        //   username : "ASC",
        },
        skip: 0,
        take:  6,
      });
      res.status(200).json(usersList)
}


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction




