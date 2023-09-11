import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenoterrorComponent } from './pagenoterror.component';

describe('PagenoterrorComponent', () => {
  let component: PagenoterrorComponent;
  let fixture: ComponentFixture<PagenoterrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagenoterrorComponent]
    });
    fixture = TestBed.createComponent(PagenoterrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
