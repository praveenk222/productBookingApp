import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { TrackmyorderPage } from './trackmyorder.page';

describe('TrackmyorderPage', () => {
  let component: TrackmyorderPage;
  let fixture: ComponentFixture<TrackmyorderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrackmyorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
