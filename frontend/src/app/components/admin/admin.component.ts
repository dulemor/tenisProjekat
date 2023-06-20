import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private userServices: UserService, private router: Router) {}

  ngOnInit(): void {
    if (this.logged) {
      location.reload();
    }

    this.userServices.getAllUsers().then((resp) => {
      let userString = JSON.stringify(resp);
      this.allUsers = JSON.parse(userString);
    });
  }

  allUsers: User[] = [];
  logged = localStorage.getItem('logged');
  counter: number = 0;

  accept(user: User) {
    this.userServices
      .approveUser(user.username)
      .then((resp) => {
        alert('uspeh');
      })
      .catch(() => {
        alert('error');
      });
  }

  reject(user: User) {
    this.userServices
      .deleteUser(user.username)
      .then((resp) => {
        location.reload();
      })
      .catch(() => {
        alert('error');
      });
  }
}
