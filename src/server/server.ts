import { ormConfig } from "./ormConfig";
import { DataSource } from "typeorm";

let connected = false;
export default function dbConnection() {
  console.log("call db connection");
  const AppDataSource = new DataSource(ormConfig);
  if (connected) {
    console.log("reconnection to db ...");
    return AppDataSource;
  }

  // to initialize initial connection with the database, register all entities
  // and "synchronize" database schema, call "initialize()" method of a newly created database
  // once in your application bootstrap
  AppDataSource.initialize()
    .then(() => {
      connected = true;
      console.log("connected successfully");
      // here you can start to work with your database
    })
    .catch(console.log);
}
