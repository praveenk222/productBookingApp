import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { GlamyPage } from './glamy.page';

describe('GlamyPage', () => {
  let component: GlamyPage;
  let fixture: ComponentFixture<GlamyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GlamyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
