import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Splashscreen2Page } from './splashscreen2.page';

describe('Splashscreen2Page', () => {
  let component: Splashscreen2Page;
  let fixture: ComponentFixture<Splashscreen2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Splashscreen2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
