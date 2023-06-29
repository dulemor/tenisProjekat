import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  username: string = '';
  password: string = '';

  login() {
    this.userService
      .login(this.username, this.password)
      .then((resp) => {
        let user: User = JSON.parse(JSON.stringify(resp));
        if (user != null) {
          localStorage.setItem('logged', JSON.stringify(user));
          if (user.userType == 0) {
            this.router.navigate(['admin']);
          } else {
            this.router.navigate(['home']);
          }
        } else {
          alert(this.username);
          alert(this.password);
        }
      })
      .catch(() => {
        alert('error');
      });
  }
}
