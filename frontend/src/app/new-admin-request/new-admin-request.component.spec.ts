import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { userData } from '../test-utils';
import { UserService } from '../user.service';

import { NewAdminRequestComponent } from './new-admin-request.component';

let mock = (function() {
  let store:any = {
    userData : JSON.stringify({
      role : 'Admin',
      id : 1
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

describe('NewAdminRequestComponent', () => {
  let component: NewAdminRequestComponent;
  let fixture: ComponentFixture<NewAdminRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAdminRequestComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        UserService
      ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAdminRequestComponent);
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

  it('should call reject admin', () => {
    component.user = [
      userData('Tanvi', 'PENDING'),
      userData('Raj', 'APPROVED'),
      userData('Patel', 'REJECTED')
    ];

    fixture.detectChanges();
    const spyRejectAdmin = spyOn(component, 'openPopup');
    const rejectBtn = fixture.debugElement.nativeElement.querySelector('#reject-btn');
    console.log(rejectBtn);
    rejectBtn.click();
    
    expect(spyRejectAdmin.calls.argsFor(0)[1]).toEqual('REJECT')

  })

  it('should call delete admin', () => {
    component.user = [
      userData('Tanvi', 'PENDING'),
      userData('Raj', 'APPROVED'),
      userData('Patel', 'REJECTED')
    ];

    fixture.detectChanges();
    const spyDeleteUser = spyOn(component, 'openPopup');
    const DeleteBtn = fixture.debugElement.nativeElement.querySelector('#delete-btn');
    console.log(DeleteBtn);
    DeleteBtn.click();
    
    expect(spyDeleteUser.calls.argsFor(0)[1]).toEqual('DELETE');

  })

  it('should call approve admin', () => {
    component.user = [
      userData('Tanvi', 'PENDING'),
      userData('Raj', 'APPROVED'),
      userData('Patel', 'REJECTED')
    ];

    fixture.detectChanges();
    const spyApproveAdmin = spyOn(component, 'openPopup');
    const approveAdmin = fixture.debugElement.nativeElement.querySelector('#appove-btn');
    console.log(approveAdmin);
    approveAdmin.click();
    
    expect(spyApproveAdmin.calls.argsFor(0)[1]).toEqual('APPROVE');

  })


  it('should call approve method if Approve button pressed', () => {
    component.user = [
      userData('Tanvi', 'PENDING'),
      userData('Raj', 'APPROVED'),
      userData('Patel', 'REJECTED')
    ];

    fixture.detectChanges();
    const spyHandleAction = spyOn(component, 'handleAction');
    const spyApprove = spyOn(component, 'approve');
    const approveAdmin = fixture.debugElement.nativeElement.querySelector('#appove-btn');
    console.log(approveAdmin);
    approveAdmin.click();
    
    expect(component.action).toEqual('APPROVE');
    fixture.detectChanges();
    const actionBtn = fixture.debugElement.nativeElement.querySelector('#action-btn');
    console.log(actionBtn);
    actionBtn.click();
    expect(spyHandleAction).toHaveBeenCalled();
    console.log(spyHandleAction.calls.argsFor(0));
   
    
    // expect(spyApprove).toHaveBeenCalled();
    


  })
});
