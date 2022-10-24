import { getRepository } from "typeorm";
import dbConnection from "../server";

import { User } from "./user.entity";

export class UserController {
  constructor() {
    if (typeof window === "undefined") {
      dbConnection();
    }
  }
  static getAllUsers = async () => {
    //Get users from database
    if (typeof window === "undefined") {
      const userRepository = getRepository(User);
      const usersList = await userRepository.find({
        // select: ["id", "username", "role"], //We dont want to send the passwords on response
        relations: [],
        // skip: (pagination - 1) * 6,
        order: {
          //   username : "ASC",
        },
        skip: 0,
        take: 6
      });
      console.log("users====", usersList);
      return usersList;
    }
  };
}
