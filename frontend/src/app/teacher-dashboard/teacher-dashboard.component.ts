import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { DEPARTMENTS, getLabelBasedOnValue, SEMS, YEARS } from '../utils';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css'],
})
export class TeacherDashboardComponent implements OnInit {
  students: User[] = [];

  currentLoggedInUser: User;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.currentLoggedInUser = this.userService.getLoggedInUser();
    this.userService.getStudentList().subscribe({
      next : (data) => {
        console.log(data);
        this.students = data.map(d => {
          return {
            ...d,
            departmentLabel : getLabelBasedOnValue(DEPARTMENTS, d.department),
            semLabel : getLabelBasedOnValue(SEMS, d.sem),
            yearLabel : getLabelBasedOnValue(YEARS, d.year)
          }
        });
      }
    })
  }

  userDetails(id: number) {
    this.router.navigate(['homepage/user-details', id]);
  }


}
