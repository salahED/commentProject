import * as ormconfig from "../ormconfig";
import { DataSource, DataSourceOptions } from "typeorm";
import { UserEntity } from "./user/user.entity";
import { PostEntity } from "./post/post.entity";
import { CommentEntity } from "./comment/comment.entity";
// import { CommentEntity } from "./comment/comment.entity";

let connection: DataSource;

export default async function dbConnection() {
  if (connection) {
    return connection;
  }

  console.log("call db connection");
  const AppDataSource = new DataSource({
    ...ormconfig,
    entities: [UserEntity, PostEntity, CommentEntity]
  } as DataSourceOptions);
  // to initialize initial connection with the database, register all entities
  // and "synchronize" database schema, call "initialize()" method of a newly created database
  // once in your application bootstrap
  connection = await AppDataSource.initialize();

  console.log("connected successfully");
}
