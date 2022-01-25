import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindHelperComponent } from './find-helper.component';

describe('FindHelperComponent', () => {
  let component: FindHelperComponent;
  let fixture: ComponentFixture<FindHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindHelperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
