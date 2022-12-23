import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LectureService } from '../lecture.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { ATT_STATUS, DEPARTMENTS, getLabelBasedOnValue, SEMS, SUBJECTS, YEARS } from '../utils';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id!: number
  user!: User;
  subs = [...SUBJECTS];
  subject : any;
  atts : any[] = [];
  constructor(private route: ActivatedRoute, private userService: UserService,
    private lectureService : LectureService
    
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.user = new User();
    this.userService.getUserById(this.id).subscribe( data => {
      this.user = {...data, 
        departmentLabel : getLabelBasedOnValue(DEPARTMENTS, data?.department ?? ''),
        semLabel : getLabelBasedOnValue(SEMS, data?.sem ?? ''),
        yearLabel : getLabelBasedOnValue(YEARS, data?.year ?? '')

      };
    });
  }

  handleOnChange(e){
    console.log(e.target.value);
    if(isNaN(e.target.value)){
      alert('Please select valid subject')
      return;
    }

    this.loadAtt()
  }

  loadAtt(){
    const fltr = `studentId=${this.user.id}&subject=${this.subject}`;
    this.lectureService.getLec(fltr).subscribe({
      next : (data) => {
        console.log(data);

        this.atts = data.map(d => {
          return {
            ...d,
            statusLabel : getLabelBasedOnValue(ATT_STATUS, d.status)
          }
        })

        console.log(this.atts);
        
        
      }
    })
  }

}
