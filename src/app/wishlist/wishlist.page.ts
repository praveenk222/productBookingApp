import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   wishlist=[
    {wishImg:'../../assets/jeans.webp',type:'Men Jeans',discountPrice:'1999',oPrice:'2999',discount:'61',color:'Grey white'},
    {wishImg:'../../assets/wishWatch.webp',type:'Luminox Mens Sea',discountPrice:'2999',oPrice:'6999',discount:'66',color:'Quartz black'},
  ]
}
