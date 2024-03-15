import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Splashscreen3Page } from './splashscreen3.page';

describe('Splashscreen3Page', () => {
  let component: Splashscreen3Page;
  let fixture: ComponentFixture<Splashscreen3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Splashscreen3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
