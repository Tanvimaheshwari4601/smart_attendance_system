import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<string>();

  constructor(private router: Router) {}

  logout() {
    localStorage.clear();
    this.router.navigate(['/login-user']);
  }
  Dashboard() {
    this.router.navigate(['/']);
  }
  home() {
    this.toggleSidebar.next('sf');
  }
}
