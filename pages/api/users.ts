import type { NextApiRequest, NextApiResponse } from "next";
import { UserService } from "../../server/user/userService";

export default async function getAllUsers(req: NextApiRequest, res: NextApiResponse<any>) {
  console.log("received req on ", req.method, req.body.id);
  switch (req.method) {
    case "GET":
      const allUsers = await UserService.getAllUsers();
      console.log("dataaaaaaaaaa", allUsers);
      res.status(200).json(allUsers);
      break;
    case "PUT":
      const updateData = await UserService.addorUpdateUser(req.body);
      res.status(200).json(updateData);
      break;
    case "POST":
      const postData = await UserService.addorUpdateUser(req.body);
      res.status(200).json([postData]);
      break;
    case "DELETE":
      break;
    default:
      console.log("other methode not alowed");
      break;
  }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
