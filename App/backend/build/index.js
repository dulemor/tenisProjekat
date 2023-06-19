"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initApi_1 = require("./api/initApi");
const initMysql_1 = require("./mysql/initMysql");
(0, initApi_1.initApi)();
initMysql_1.dbConnection.connect();
//# sourceMappingURL=index.js.map