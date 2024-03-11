import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mybag',
  templateUrl: './mybag.page.html',
  styleUrls: ['./mybag.page.scss'],
})
export class MybagPage implements OnInit {

  itemCount:number=0;
  constructor() { }

  ngOnInit() {
  }
  baglist=[
    {bagImg:'../../assets/jeans.webp',type:'Men Jeans',price:'1999',color:'Grey',size:'L'},
    {bagImg:'../../assets/wishWatch.webp',type:'Luminox Mens Sea',price:'2999',color:'Blue',size:'M'},
  ]
  billAmount=[
    {total:'1500',couponCode:'150',gst:'50',dCharge:'50'}
  ]
  itemIncre() {
    this.itemCount++
  }
  itemDecre() {
    return this.itemCount ? this.itemCount-- : this.itemCount
  }
  parseToInt(value: string): number {
    return parseInt(value, 10); 
  }
}
