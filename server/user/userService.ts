import dbConnection from "../dbConnection";
import { UserEntity } from "./user.entity";

export class UserService {
  constructor() {}
  static getAllUsers = async () => {
    //open db connection
    await dbConnection();
    //Get users from database
    const usersList = await UserEntity.find();
    return usersList;
  };
  static addorUpdateUser = async (body: any) => {
    await dbConnection();
    //insert or update user in database depending on id if id then update else save
    const user = await UserEntity.save(body);
    console.log("user ===================", user);
    return user;
  };
}
