import { Court } from "../../mysql/models/Court";
import { userDAO } from "../../mysql/DAOs/UserDAO";
import { Controller, Get, Route } from "tsoa";
import { courtDAO } from "../../mysql/DAOs/CourtDAO";

@Route("courts")
export class CourtController extends Controller {
  @Get("getAll")
  async getAllBooks() {
    return await courtDAO.getAllCourts();
  }
}
