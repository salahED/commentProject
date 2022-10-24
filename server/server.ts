import { ormConfig } from "./ormConfig";
import { DataSource } from "typeorm";

let connection: DataSource;

export default async function dbConnection() {
  if (connection) {
    return connection;
  }

  console.log("call db connection");
  const AppDataSource = new DataSource(ormConfig as any);

  // to initialize initial connection with the database, register all entities
  // and "synchronize" database schema, call "initialize()" method of a newly created database
  // once in your application bootstrap
  connection = await AppDataSource.initialize();

  console.log("connected successfully");
}
