import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageaccountPage } from './manageaccount.page';

describe('ManageaccountPage', () => {
  let component: ManageaccountPage;
  let fixture: ComponentFixture<ManageaccountPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ManageaccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
