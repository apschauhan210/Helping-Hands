import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperRegistrationComponent } from './helper-registration.component';

describe('HelperRegistrationComponent', () => {
  let component: HelperRegistrationComponent;
  let fixture: ComponentFixture<HelperRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelperRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelperRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
