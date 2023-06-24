import {
  Body,
  Controller,
  Delete,
  Get,
  Path,
  Post,
  Route,
  Response,
  SuccessResponse,
} from "tsoa";
import { User } from "../../mysql/models/User";
import { userDAO } from "../../mysql/DAOs/UserDAO";

@Route("users")
export class UserController extends Controller {
  @Post("login")
  async login(@Body() user: User) {
    return await userDAO.login(user.username, user.password);
  }

  @Response("500", "Registracija nije uspela")
  @SuccessResponse("200", "Registracija uspela")
  @Post("register")
  async register(@Body() user: User) {
    const result = await userDAO.register(user);
    if (result) this.setStatus(200);
    else this.setStatus(500);
    return result;
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
