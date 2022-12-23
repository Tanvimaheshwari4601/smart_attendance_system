import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { DEPARTMENTS, SEMS, YEARS } from '../utils';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  Roles = ['TEACHER', 'STUDENT'];

  user: User = new User();
  years = YEARS;
  departments = DEPARTMENTS;
  sems = SEMS;
  registrationAPIerror: string;
  constructor(private userService: UserService, private router: Router) {}

  saveUser() {

    this.userService.getUserFltr(`emailid=${this.user.emailid}`).subscribe({
      next : (data) =>{
        if(data.length == 0){
          this.userService.createUser(this.user).subscribe({
            next: (data) => {
              console.log(data);
              this.gotoUserList();
            },
            error: (err) => {
              console.log(err);
              this.registrationAPIerror = err.error.message;
              console.log(this.registrationAPIerror);
            },
          });
      
        }   else{
          alert('User with same email already exists!!');
        }     
      }
    })
  }

  gotoUserList() {
    this.router.navigate(['/homepage/users']);
  }
  onSubmit() {
    console.log(this.user);
    this.saveUser();
  }
}
