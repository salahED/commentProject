import type { NextApiRequest, NextApiResponse } from "next";
import { UserController } from "../../server/user/userController";

export default async function getAllUsers(req: NextApiRequest, res: NextApiResponse<any>) {
  console.log("received req on ", req.url);
  try {
    const data = await UserController.getAllUsers();
    console.log("dataaaaaaaaaa", data);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
  }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
