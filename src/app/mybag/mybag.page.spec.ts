import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MybagPage } from './mybag.page';

describe('MybagPage', () => {
  let component: MybagPage;
  let fixture: ComponentFixture<MybagPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MybagPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
