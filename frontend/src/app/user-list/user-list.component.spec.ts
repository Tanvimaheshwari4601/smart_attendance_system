import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed} from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { userData } from '../test-utils';
import { UserService } from '../user.service';

import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      providers : [UserService],
      imports :[
        RouterTestingModule,
        HttpClientModule,
        BrowserModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
   
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should show 3 items in list', () => {
    component.user = [
      userData('Tanvi', 'PENDING'),
      userData('Raj', 'APPROVED'),
      userData('Patel', 'REJECTED')
    ];

    fixture.detectChanges();

    const users = fixture.debugElement.nativeElement.querySelectorAll('.data-row');
    
    expect(users.length).toEqual(3);

  })

  it('should call update user', () => {
    component.user = [
      userData('Tanvi', 'PENDING'),
      userData('Raj', 'APPROVED'),
      userData('Patel', 'REJECTED')
    ];

    fixture.detectChanges();
    const spyUpdateUser = spyOn(component, 'updateUser');
    const updateBtn = fixture.debugElement.nativeElement.querySelector('#update-btn');
    console.log(updateBtn);
    updateBtn.click();
    
    expect(spyUpdateUser).toHaveBeenCalled();

  })

  it('should call delete user', () => {
    component.user = [
      userData('Tanvi', 'PENDING'),
      userData('Raj', 'APPROVED'),
      userData('Patel', 'REJECTED')
    ];

    fixture.detectChanges();
    const spyDeleteUser = spyOn(component, 'deleteUser');
    const DeleteBtn = fixture.debugElement.nativeElement.querySelector('#delete-btn');
    console.log(DeleteBtn);
    DeleteBtn.click();
    
    expect(spyDeleteUser).toHaveBeenCalled();

  })

  it('should call userDetails user', () => {
    component.user = [
      userData('Tanvi', 'PENDING'),
      userData('Raj', 'APPROVED'),
      userData('Patel', 'REJECTED')
    ];

    fixture.detectChanges();
    const spyViewUser = spyOn(component, 'userDetails');
    const ViewBtn = fixture.debugElement.nativeElement.querySelector('#view-btn');
    console.log(ViewBtn);
    ViewBtn.click();
    
    expect(spyViewUser).toHaveBeenCalled();

  })
});
