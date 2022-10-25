import dbConnection from "../dbConnection";
import { PostEntity } from "./post.entity";

interface Body {
  id: number;
  title: string;
  body: string;
}
export class PostService {
  constructor() {}
  static getAllPosts = async () => {
    try {
      //open db connection
      await dbConnection();
      //Get users from database
      const postList = await PostEntity.find();
      return postList;
    } catch (error) {
      console.error(error);
    }
  };
  static addorUpdatePosts = async (body: any) => {
    try {
      await dbConnection();
      //insert or update user in database depending on id if id then update else save
      const post = await PostEntity.save(body);
      console.log("user ===================", post);
      return post;
    } catch (error) {
      console.error(error);
    }
  };
}
