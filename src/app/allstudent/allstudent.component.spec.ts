import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllstudentComponent } from './allstudent.component';

describe('AllstudentComponent', () => {
  let component: AllstudentComponent;
  let fixture: ComponentFixture<AllstudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllstudentComponent]
    });
    fixture = TestBed.createComponent(AllstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
