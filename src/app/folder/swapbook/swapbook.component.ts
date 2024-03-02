import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swapbook',
  templateUrl: './swapbook.component.html',
  styleUrls: ['./swapbook.component.scss'],
})
export class SwapbookComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  swapcards=[
    {image:'https://cdn.kobo.com/book-images/2479dc81-9a8f-4cce-bf5b-50e0b61d13bc/353/569/90/False/the-ghost-book-sixteen-stories-of-the-uncanny.jpg',title:'Everthing is OK',name:'Albert Flores',status:'Pending'},
    {image:'https://cdn.kobo.com/book-images/2479dc81-9a8f-4cce-bf5b-50e0b61d13bc/353/569/90/False/the-ghost-book-sixteen-stories-of-the-uncanny.jpg',title:'Everthing is OK',name:'Robert Walk',status:'Active'},
    {image:'https://cdn.kobo.com/book-images/2479dc81-9a8f-4cce-bf5b-50e0b61d13bc/353/569/90/False/the-ghost-book-sixteen-stories-of-the-uncanny.jpg',title:'Everthing is OK',name:'Albert Flores',status:'Ended'},
    {image:'https://cdn.kobo.com/book-images/2479dc81-9a8f-4cce-bf5b-50e0b61d13bc/353/569/90/False/the-ghost-book-sixteen-stories-of-the-uncanny.jpg',title:'Everthing is OK',name:'Albert Flores',status:'Ended'},
  ]
  
}
