import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobilenoSignupPage } from './mobileno-signup.page';

describe('MobilenoSignupPage', () => {
  let component: MobilenoSignupPage;
  let fixture: ComponentFixture<MobilenoSignupPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MobilenoSignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
