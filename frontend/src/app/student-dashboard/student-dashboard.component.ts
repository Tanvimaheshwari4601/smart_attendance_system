import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css'],
})
export class StudentDashboardComponent implements OnInit {
  currentLoggedInUser: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.currentLoggedInUser = this.userService.getLoggedInUser();
  }
}
