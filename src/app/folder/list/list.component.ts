import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent  implements OnInit {

  constructor() { }


  ngOnInit() {}
 linkClicked: boolean = false;

    changeColor() {
        this.linkClicked = !this.linkClicked;
    }
}
