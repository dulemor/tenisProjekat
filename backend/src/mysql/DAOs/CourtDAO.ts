import { dbConnection } from "../initMysql";
import { Court } from "../models/Court";

class CourtDAO {
  async getAllCourts(): Promise<Court[] | null> {
    return new Promise((resolve, reject) => {
      var sqlQuery = "select * from courts";
      dbConnection.query(sqlQuery, null, function (err, rows) {
        if (err) reject(err);
        else resolve(JSON.parse(JSON.stringify(rows)));
      });
    });
  }
}

export const courtDAO = new CourtDAO();
