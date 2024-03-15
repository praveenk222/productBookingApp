import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmorderPage } from './confirmorder.page';

describe('ConfirmorderPage', () => {
  let component: ConfirmorderPage;
  let fixture: ComponentFixture<ConfirmorderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfirmorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
