"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDAO = void 0;
const initMysql_1 = require("../initMysql");
class UserDAO {
    login(kor_ime, lozinka) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var sqlQuery = "select * from korisnici where " +
                    "kor_ime=? and lozinka=?";
                var queryVar = [kor_ime, lozinka];
                initMysql_1.dbConnection.query(sqlQuery, queryVar, function (err, rows) {
                    if (err)
                        return reject(err);
                    else
                        resolve(JSON.parse(JSON.stringify(rows))[0]);
                    //return reject();
                });
            });
        });
    }
    register(user) {
        return __awaiter(this, void 0, void 0, function* () {
            var sqlQuery = "insert into korisnici values (?,?,?,?)";
            var queryVar = [user.kor_ime, user.lozinka, user.ime, user.prezime];
            initMysql_1.dbConnection.query(sqlQuery, queryVar, function (err, rows) { });
        });
    }
}
exports.userDAO = new UserDAO();
//# sourceMappingURL=UserDAO.js.map