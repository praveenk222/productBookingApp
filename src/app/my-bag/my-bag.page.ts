import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-my-bag',
  templateUrl: './my-bag.page.html',
  styleUrls: ['./my-bag.page.scss'],
})
export class MyBagPage implements OnInit {

  constructor(private cart:CartService) { }

  ngOnInit() {
   
  }
  billAmount=[
    {total:'1500',couponCode:'150',gst:'50',dCharge:'50'}
  ]
  baglist=[
    {id:1,bagImg:'../../assets/jeans.webp',type:'Men Jeans',price:'1999',color:'Grey',size:'L',itemCount:0},
    {id:2,bagImg:'../../assets/wishWatch.webp',type:'Luminox Mens Sea',price:'2999',color:'Blue',size:'M',itemCount:0},
  ]
  itemIncre(id: any) {
    return this.baglist.filter(bag => bag.id === id ? bag.itemCount++ : bag.itemCount)
  }
  itemDecre(id:number) {
    return this.baglist.filter(bag => bag.id === id ? bag.itemCount-- : bag.itemCount)
  }
  parseToInt(value: string): number {
    return parseInt(value, 10); 
  }
  getItems(){
   this.baglist=this.cart.getItems()
   console.log(this.baglist)
  }
}
