import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookswisePage } from './bookswise.page';

describe('BookswisePage', () => {
  let component: BookswisePage;
  let fixture: ComponentFixture<BookswisePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BookswisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
