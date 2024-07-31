import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAccountSComponent } from './new-account-s.component';

describe('NewAccountSComponent', () => {
  let component: NewAccountSComponent;
  let fixture: ComponentFixture<NewAccountSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAccountSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAccountSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
