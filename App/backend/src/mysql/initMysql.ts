import mysql from "mysql2";

export const dbConnection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Password1243!",
  database: "tennisclub",
});
