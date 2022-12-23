import { Component, OnInit } from '@angular/core';
import { Lecture, User } from '../user';
import { UserService } from '../user.service';
import { ATT_STATUS, DEPARTMENTS, SEMS, SUBJECTS, YEARS } from '../utils';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LectureService } from '../lecture.service';

@Component({
  selector: 'app-mark-attendence',
  templateUrl: './mark-attendence.component.html',
  styleUrls: ['./mark-attendence.component.css']
})
export class MarkAttendenceComponent implements OnInit {

  studentList : User[];
  year : any ;
  dropdownSettings:IDropdownSettings={};
  selectedItems=[];
  dropDownForm:FormGroup;


  sem : any ;
  dep : any ;
  status :any;
  selectedDate : any = new Date();
  subject  :any;
  sems = [...SEMS];
  years = [...YEARS];
  deps = [...DEPARTMENTS];
  subs = [...SUBJECTS]
  attStatus = [...ATT_STATUS];

  constructor(private userService : UserService, private fb: FormBuilder, private lectureService : LectureService) { }

  ngOnInit(): void {

    this.dropdownSettings = {
      idField: 'id',
      textField: 'name',
    };

    this.dropDownForm = this.fb.group({
      myItems: [this.selectedItems]
  });
  }

  loadStudents(){
    let fltrString = ``;

    if(!this.year || !this.dep || !this.sem){
      alert('Please select filters')
      return;
    }

    fltrString = `department=${this.dep}&sem=${this.sem}&year=${this.year}`
    this.userService.getStudentListFiltered(fltrString).subscribe({
      next : (data) => {
        console.log(data);
        this.studentList = data.map(d => {
          return {
            ...d
          }
        });
      }
       
    })
  }

  async markAtt(){
    if(!this.subject || !this.selectedDate || !this.status){
      alert('INvalid Data')
      return;
    }

    const selectedSt = this.dropDownForm.controls['myItems'].value;

    console.log(selectedSt);
    
    for (let st of selectedSt){
      let lec : Lecture = new Lecture();
      lec.date = this.selectedDate;
      lec.status = this.status;
      lec.subject = this.subject;
      lec.studentId = st.id;
      const fltr=`date=${lec.date}&studentId=${lec.studentId}&subject=${lec.subject}`;
      await this.lectureService.getLec(fltr).subscribe({
        next : (data) => {
          if (data.length == 0){

            console.log('CREATING NEW ATT');
            
            this.lectureService.markAtt(lec).subscribe({
              next : (data) => {
                console.log(data);
                
              }
            })

          }else{

            console.log('UPDATING NEW ATT');
            lec.id = data[0].id;
            this.lectureService.updateAtt(lec).subscribe({
              next : (data) => {
                console.log(data);
                
              }
            })
        }}
      })
    }

    alert('Attendance Marked Successfully!!')
    
  }

}
