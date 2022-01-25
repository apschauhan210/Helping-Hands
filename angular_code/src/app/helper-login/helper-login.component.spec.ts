import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperLoginComponent } from './helper-login.component';

describe('HelperLoginComponent', () => {
  let component: HelperLoginComponent;
  let fixture: ComponentFixture<HelperLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelperLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelperLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
