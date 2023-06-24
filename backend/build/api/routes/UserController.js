"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.UserController = void 0;
const tsoa_1 = require("tsoa");
const UserDAO_1 = require("../../mysql/DAOs/UserDAO");
let UserController = class UserController extends tsoa_1.Controller {
    login(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UserDAO_1.userDAO.login(user.username, user.password);
        });
    }
    register(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield UserDAO_1.userDAO.register(user);
            if (result)
                this.setStatus(200);
            else
                this.setStatus(500);
            return result;
        });
    }
    getUser(username) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UserDAO_1.userDAO.getUser(username);
        });
    }
    getAllBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UserDAO_1.userDAO.getAllUsers();
        });
    }
    deleteBook(username) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UserDAO_1.userDAO.deleteUser(username);
        });
    }
    editBook(username) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UserDAO_1.userDAO.approveUser(username);
        });
    }
};
__decorate([
    (0, tsoa_1.Post)("login"),
    __param(0, (0, tsoa_1.Body)())
], UserController.prototype, "login", null);
__decorate([
    (0, tsoa_1.Response)("500", "Registracija nije uspela"),
    (0, tsoa_1.SuccessResponse)("200", "Registracija uspela"),
    (0, tsoa_1.Post)("register"),
    __param(0, (0, tsoa_1.Body)())
], UserController.prototype, "register", null);
__decorate([
    (0, tsoa_1.Get)("getUser/{username}"),
    __param(0, (0, tsoa_1.Path)())
], UserController.prototype, "getUser", null);
__decorate([
    (0, tsoa_1.Get)("getAll")
], UserController.prototype, "getAllBooks", null);
__decorate([
    (0, tsoa_1.Delete)("deleteUser/{username}"),
    __param(0, (0, tsoa_1.Path)())
], UserController.prototype, "deleteBook", null);
__decorate([
    (0, tsoa_1.Post)("approveUser"),
    __param(0, (0, tsoa_1.Body)())
], UserController.prototype, "editBook", null);
UserController = __decorate([
    (0, tsoa_1.Route)("users")
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map