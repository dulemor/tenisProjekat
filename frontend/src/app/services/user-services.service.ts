import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  backend = 'http://localhost:5005';

  login(username: string, password: string) {
    let user = new User();
    user.username = username;
    user.password = password;

    return firstValueFrom(this.http.post(`${this.backend}/users/login`, user));
  }

  register(user: User) {
    return firstValueFrom(
      this.http.post(`${this.backend}/users/register`, user)
    );
  }

  getAllUsers() {
    return firstValueFrom(this.http.get(`${this.backend}/users/getAll`));
  }

  deleteUser(username: string) {
    return firstValueFrom(
      this.http.delete(`${this.backend}/users/deleteUser/${username}`)
    );
  }

  approveUser(username: string) {
    return firstValueFrom(
      this.http.post(`${this.backend}/users/approveUser`, username)
    );
  }
}
