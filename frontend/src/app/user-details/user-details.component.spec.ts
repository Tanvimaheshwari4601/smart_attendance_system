import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsComponent } from './user-details.component';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../user.service';


describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      imports : [RouterTestingModule,
      HttpClientModule],
      providers :[
        UserService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
