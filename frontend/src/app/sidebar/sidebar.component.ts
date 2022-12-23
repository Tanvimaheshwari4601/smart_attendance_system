import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  savedUser : any;

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {
   
   this.savedUser = this.userService.getLoggedInUser();

   if(this.savedUser.role == 'User'){
    this.router.navigate(['/homepage/mark-att'])
   }
  }

}
