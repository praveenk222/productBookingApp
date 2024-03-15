import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Splashscreen1Page } from './splashscreen1.page';

describe('Splashscreen1Page', () => {
  let component: Splashscreen1Page;
  let fixture: ComponentFixture<Splashscreen1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Splashscreen1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
