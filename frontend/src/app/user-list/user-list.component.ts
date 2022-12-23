import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  savedUser: any;
  user: User[] = [];
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.savedUser = this.userService.getLoggedInUser();
    this.getUsers();
  }

  private getUsers() {
    this.userService.getApprovedUsers(this.savedUser.id).subscribe((data) => {
      this.user = data;
    });
  }
  userDetails(id: number) {
    this.router.navigate(['homepage/user-details', id]);
  }

  updateUser(id: number) {
    this.router.navigate(['homepage/update-user', id]);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe((data) => {
      console.log(data);
      this.getUsers();
    });
  }
}
