import dbConnection from "../server";
import { UserEntity } from "./user.entity";

export class UserController {
  constructor() {}
  static getAllUsers = async () => {
    await dbConnection();
    //Get users from database
    const usersList = await UserEntity.find({
      // select: ["id", "username", "role"], //We dont want to send the passwords on response
      relations: [],
      // skip: (pagination - 1) * 6,
      order: {
        //   username : "ASC",
      },
      skip: 0,
      take: 6,
    });

    return usersList;
  };
}
