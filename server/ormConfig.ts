import { ConnectionOptions } from "typeorm";

// You can load you .env file here synchronously using dotenv package (not installed here),
// import * as dotenv from 'dotenv';
// import * as fs from 'fs';
// const environment = process.env.NODE_ENV || 'development';
// const data: any = dotenv.parse(fs.readFileSync(`${environment}.env`));
// You can also make a singleton service that load and expose the .env file content.
// ...

// Check typeORM documentation for more information.
export const ormConfig: ConnectionOptions = {
  type: "postgres",
  schema: "public",
  host: "localhost",
  username: "postgres",
  password: "postgres",
  database: "commentdb",
  port: 5433,
  synchronize: true,
  logging: true,
  entities: ["server/**/*.entity.ts"],
  migrations: ["server/migration/**/*.ts"],
  subscribers: ["server/**/subscriber/**/*.ts"]
  // cli : {
  //   entitiesDir: "server/entity",
  //   migrationsDir: "server/migration",
  //   subscribersDir: "server/subscriber"
  // }
};
