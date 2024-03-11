import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.page.html',
  styleUrls: ['./searchresult.page.scss'],
})
export class SearchresultPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  shirts=[
    {image:'https://media.balmain.com/image/upload/f_auto,q_auto,dpr_auto/c_fill,w_375,h_530/sfcc/balmain/hi-res/CH1HS166CC630PAB?_i=AG',name:'Balmain',design:'Shirt',rate:'Rs.11999',rrate:'Rs.14999',discount:'41%. off'},
    {image:'https://media.balmain.com/image/upload/f_auto,q_auto,dpr_auto/c_fill,w_375,h_530/sfcc/balmain/hi-res/CH1JQ049PC17EJPB?_i=AG',name:'Balmain',design:'Sweat Shirt',rate:'Rs.11099',rrate:'Rs.11999',discount:'31%. off'}
  
  ]
  }

