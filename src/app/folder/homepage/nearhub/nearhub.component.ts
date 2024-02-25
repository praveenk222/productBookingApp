import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicSlides } from '@ionic/angular';


@Component({
  selector: 'app-nearhub',
  templateUrl: './nearhub.component.html',
  styleUrls: ['./nearhub.component.scss'],
})
export class NearhubComponent  implements OnInit {
  @Input() slides:any;
  swiperModules = [IonicSlides];
  azimageUrl:any='https://everdevuat.blob.core.windows.net/hubs/';

  constructor() { }

  ngOnInit() {
  }

 

  
 
}
