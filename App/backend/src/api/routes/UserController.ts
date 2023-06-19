import { Body, Controller, Delete, Get, Path, Post, Route } from "tsoa";
import { User } from "../../mysql/models/User";
import { userDAO } from "../../mysql/DAOs/UserDAO";

@Route("users")
export class UserController extends Controller {
  @Post("login")
  async login(@Body() user: User) {
    return await userDAO.login(user.username, user.password);
  }

  @Post("register")
  async register(@Body() user: User) {
    return await userDAO.register(user);
  }

  @Get("getUser/{username}")
  async getUser(@Path() username: string) {
    return await userDAO.getUser(username);
  }

  @Get("getAll")
  async getAllBooks() {
    return await userDAO.getAllUsers();
  }

  @Delete("deleteUser/{username}")
  async deleteBook(@Path() username: string) {
    return await userDAO.deleteUser(username);
  }

  @Post("approveUser")
  async editBook(@Body() username: string) {
    return await userDAO.approveUser(username);
  }
}
