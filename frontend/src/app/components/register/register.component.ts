import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  username: string = '';
  password: string = '';
  name: string = '';
  surname: string = '';
  telephoneNumber: string = '';
  userType: number = 0;

  register() {
    let user = new User();
    user.username = this.username;
    user.password = this.password;
    user.name = this.name;
    user.surname = this.surname;
    user.telephoneNumber = this.telephoneNumber;
    user.userType = this.userType;
    user.approved = false;
    this.userService.register(user);
    this.router.navigate(['/registerSuccess']);
  }
}
