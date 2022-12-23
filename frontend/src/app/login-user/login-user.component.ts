import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
})
export class LoginUserComponent {
  user: User = new User();
  loginApiError: string;
  login: FormGroup;

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    console.log(this.user);
    this.userService
      .loginUser(this.user.emailid, this.user.password)
      .subscribe({
        next: (data) => {
          console.log(data);
          if (data.length == 0) {
            this.loginApiError = 'username or password is invalid.';
          } else {
            localStorage.setItem('userData', JSON.stringify(data[0]));
            localStorage.setItem('isloggedin', 'true');
            
            if(data[0].role == 'TEACHER'){

              this.router.navigate(['/homepage']);
            }else{
              this.router.navigate(['homepage/user-details', data[0].id]);
            }

          }
        },
        complete: () => {
          console.log('complete');
        },
        error: (err) => {
          console.log(err);
          this.loginApiError = err.error.message;
          console.log(this.loginApiError);
        },
      });
  }
}
