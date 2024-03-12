import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myaddress',
  templateUrl: './myaddress.page.html',
  styleUrls: ['./myaddress.page.scss'],
})
export class MyaddressPage implements OnInit {

  constructor() {alert() }

  ngOnInit() {
  }
  
  address=[
    {name:'reddy',apartment:'sumanth nivas',city:'hyd',distract:'Rangareddy',state:'Telengana',country:'ind',pincode:'500090'},
    {name:'reddy',apartment:'sumanth nivas',city:'hyd',distract:'Rangareddy',state:'Telengana',country:'ind',pincode:'500090'},
    {name:'reddy',apartment:'sumanth nivas',city:'hyd',distract:'Rangareddy',state:'Telengana',country:'ind',pincode:'500085'},
   ]
}
