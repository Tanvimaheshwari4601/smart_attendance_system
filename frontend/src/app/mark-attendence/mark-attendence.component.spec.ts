import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkAttendenceComponent } from './mark-attendence.component';

describe('MarkAttendenceComponent', () => {
  let component: MarkAttendenceComponent;
  let fixture: ComponentFixture<MarkAttendenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkAttendenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkAttendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
