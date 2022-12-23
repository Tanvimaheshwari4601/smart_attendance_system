import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../user.service';

import { UpdateUserComponent } from './update-user.component';

describe('UpdateUserComponent', () => {
  let component: UpdateUserComponent;
  let fixture: ComponentFixture<UpdateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUserComponent ],
      providers: [UserService],
      imports:[
        HttpClientModule,
        FormsModule,
        RouterTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    // expect(component.title).toBe('NOTICE BOARD');
    // we are accessing "h1"
    const title = fixture.debugElement.nativeElement.querySelector('#update-user-title');
    expect(title.innerHTML).toBe('Update User');
  });
});
