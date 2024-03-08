import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyBagPage } from './my-bag.page';

describe('MyBagPage', () => {
  let component: MyBagPage;
  let fixture: ComponentFixture<MyBagPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyBagPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
