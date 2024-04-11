import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicSlides } from '@ionic/angular';
import { BookingService } from 'src/Services/booking.service';
import { UserData } from 'src/providers/user-data';


@Component({
  selector: 'app-nearhub',
  templateUrl: './nearhub.component.html',
  styleUrls: ['./nearhub.component.scss'],
})
export class NearhubComponent  implements OnInit {
  @Input() slides:any;
  swiperModules = [IonicSlides];
  azimageUrl:any='https://everdevuat.blob.core.windows.net/hubs/';

  constructor( private _bh:BookingService,private userdata:UserData,
    private router:Router) { }

  ngOnInit() {
  }
  gotohubdetails(id:number){
this.userdata.setNew("hubid",id)

    this.router.navigateByUrl('/hub-details')
  }
 

  
 
}
