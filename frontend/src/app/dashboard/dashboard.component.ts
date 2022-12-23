import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private userService: UserService) {}
  currentLoggedInUser: User;

  ngOnInit(): void {
    this.currentLoggedInUser = this.userService.getLoggedInUser();
    console.log(this.currentLoggedInUser);
  }
}
