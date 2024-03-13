import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MywishlistPage } from './mywishlist.page';

describe('MywishlistPage', () => {
  let component: MywishlistPage;
  let fixture: ComponentFixture<MywishlistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MywishlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
