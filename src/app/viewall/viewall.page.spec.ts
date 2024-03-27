import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewallPage } from './viewall.page';

describe('ViewallPage', () => {
  let component: ViewallPage;
  let fixture: ComponentFixture<ViewallPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
