import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css'],
})
export class TrainersComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().then((resp) => {
      let userString = JSON.stringify(resp);
      this.allUsers = JSON.parse(userString);
    });

    for (let i = 0; i < this.allUsers.length; i++) {
      console.log(i);
    }

    for (let user of this.allUsers) {
      console.log(user.username);
      /*if (user.userType == 3 && user.approved == true) {
        this.allTrainers.push(user);
      }*/
    }
  }

  allUsers: User[] = [];
  allTrainers: User[] = [];
}
