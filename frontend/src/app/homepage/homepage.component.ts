import { Component} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {



  isSidebarOpen: boolean = true;

 


  toggleSidebar(event : any){
    
    this.isSidebarOpen=!this.isSidebarOpen;
    console.log('Toggling sidebar', this.isSidebarOpen);
  }

}
