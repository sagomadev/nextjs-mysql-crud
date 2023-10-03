import mysql from "serverless-mysql";

export const db = mysql({
  config: {
    host: "127.0.0.1",
    user: "user_crud",
    password: "root",
    port: 3307,
    database: "db_crud",
    insecureAuth: true,
  },
});
