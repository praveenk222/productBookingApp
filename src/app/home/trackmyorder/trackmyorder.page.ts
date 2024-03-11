import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trackmyorder',
  templateUrl: './trackmyorder.page.html',
  styleUrls: ['./trackmyorder.page.scss'],
})
export class TrackmyorderPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
dresses=[
  {image:'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/o/f/o/40-lrsfnslp732563-louis-philippe-jeans-original-imagtvqmqmuq23va.jpeg?q=70',shirt:'Mens Shirt',color:'white',rate:'Rs.1999',rrate:'Rs.2999',discount:'61%. off'},
  {image:'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/3/x/f/-original-imagt853twnphqfa.jpeg?q=70',shirt:'Mens Shirt',color:'Brown',rate:'Rs.1099',rrate:'Rs.1999',discount:'61%. off'}

]
}
