import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  greeting:any;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.status();
  }
  status(){
    const date = new Date;
    const hours = date.getHours();
    const time=(hours < 12)? "morning" :
               (((hours) <= 18 && hours >= 12 ) ? "afternoon" : "night");
console.log(time);
this.greeting=time
}
}
