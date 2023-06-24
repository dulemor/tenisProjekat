import { dbConnection } from "../initMysql";
import { User } from "../models/User";

class UserDAO {
  async login(username: string, password: string): Promise<User | null> {
    return new Promise((resolve, reject) => {
      var sqlQuery = "select * from users where username=? and password=?";
      var queryVar = [username, password];
      dbConnection.query(sqlQuery, queryVar, function (err, rows) {
        if (err) return reject(err);
        else resolve(JSON.parse(JSON.stringify(rows))[0]);
        //return reject();
      });
    });
  }

  async register(user: User): Promise<Boolean> {
    return new Promise((resolve, rject) => {
      var sqlQuery =
        "insert into users (username, password, name, surname, telephoneNumber, userType, approved) values (?,?,?,?,?,?,0)";
      var queryVar = [
        user.username,
        user.password,
        user.name,
        user.surname,
        user.telephoneNumber,
        user.userType,
      ];
      dbConnection.query(sqlQuery, queryVar, function (err, rows) {
        if (err) resolve(false);
        else resolve(true);
      });
    });
  }

  async getUser(username: string): Promise<User | null> {
    return new Promise((resolve, reject) => {
      var sqlQuery = "select * from users where username=?";
      var queryVar = [username];
      dbConnection.query(sqlQuery, queryVar, function (err, rows) {
        if (err) return reject(err);
        else resolve(JSON.parse(JSON.stringify(rows))[0]);
      });
    });
  }

  async getAllUsers(): Promise<User[] | null> {
    return new Promise((resolve, reject) => {
      var sqlQuery = "select * from users";
      dbConnection.query(sqlQuery, null, function (err, rows) {
        if (err) reject(err);
        else resolve(JSON.parse(JSON.stringify(rows)));
      });
    });
  }

  async deleteUser(username: string) {
    var sqlQuery = "delete from users where username=?";
    var queryVar = [username];

    dbConnection.query(sqlQuery, queryVar, function (err, rows) {});
  }

  async approveUser(username: string) {
    var sqlQuery = "update users set approved=true where username=?";
    var queryVar = [username];

    dbConnection.query(sqlQuery, queryVar, function (err, rows) {});
  }
}

export const userDAO = new UserDAO();
