import type { NextApiRequest, NextApiResponse } from "next";
import { PostService } from "../../server/post/postService";


export default async function getAllPosts(req: NextApiRequest, res: NextApiResponse<any>) {
  console.log("received req on ", req.method,req.body.id);
  switch (req.method) {
    case 'GET':
      // try {
        const allUsers = await PostService.getAllPosts()
        console.log("dataaaaaaaaaa", allUsers);
        res.status(200).json(allUsers);
      // } catch (error) {
      //   console.error(error);
      // }
      break;
      case 'PUT':
      case 'POST':
        let operation =''
        // try {
          req.body?.id?operation = 'Update': operation = 'Save'
          const data = await PostService.addorUpdatePosts(req.body);

          res.status(200).json([data,operation]);
        // } catch (error) {
        //   console.error(error);
        //   res.status(500).json({message:error});
        // }
      break;
      case 'DELETE':
        break;
    default:
      console.log('other methode not alowed')
      break;
  }
 
}
