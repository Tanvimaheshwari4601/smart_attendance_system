import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';

import { LoginUserComponent } from './login-user.component';
let mock = (function() {
  let store:any = {
    userData : JSON.stringify({
      role : 'Admin'
    })
  };
  return {
    getItem: function(key: string) {
      return store[key];
    },
    setItem: function(key : string, value : any) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'localStorage', { 
  value: mock,
});

fdescribe('LoginUserComponent', () => {
  let component: LoginUserComponent;
  let fixture: ComponentFixture<LoginUserComponent>;



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginUserComponent ],
      providers:[UserService],
      imports : [
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call on onSubmit button',  fakeAsync(() => {
    fixture.detectChanges();
    const spySubmitBtn = spyOn(component , 'onSubmit');
    const loginBtn = fixture.debugElement.nativeElement.querySelector('#login-btn');
    console.log(loginBtn);
    loginBtn.click();
     tick();
    expect(spySubmitBtn).toHaveBeenCalledTimes(0);
     
  }))
  it('should be valid form', async (() => {
    console.log(component.login);
    
    component.user.emailid = 'tm@gmail.com';
    component.user.password = 'hefhirhfj';
    
    fixture.detectChanges();
    const spySubmitBtn = spyOn(component , 'onSubmit');
    const loginBtn = fixture.debugElement.nativeElement.querySelector('#login-btn');
    console.log(loginBtn);
    loginBtn.click();
    expect(spySubmitBtn).toHaveBeenCalled();
    fixture.detectChanges();
    
    
    expect(component.login.valid).toBeTruthy();
  }))

});

