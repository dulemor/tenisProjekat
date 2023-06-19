"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
exports.dbConnection = mysql2_1.default.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Password1243!",
    database: "tennisclub",
});
//# sourceMappingURL=initMysql.js.map