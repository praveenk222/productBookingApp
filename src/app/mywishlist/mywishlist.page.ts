import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-mywishlist',
  templateUrl: './mywishlist.page.html',
  styleUrls: ['./mywishlist.page.scss'],
})
export class MywishlistPage implements OnInit {

  constructor(private cart:CartService) {
    
   }
  ngOnInit() {
  }
  wishlist = [
    {id: 1, wishImg: '../../assets/jeans.webp', type: 'Men Jeans', discountPrice: '1999', oPrice: '2999', discount: '61', color: 'Grey white'},
    {id: 2, wishImg: '../../assets/wishWatch.webp', type: 'Luminox Mens Sea', discountPrice: '2999', oPrice: '6999', discount: '66', color: 'Quartz black'},
  ];
  addCart(id: number) {
    const item = this.wishlist.find(wish => wish.id === id);
    if (item) {
      this.cart.addItem(item.wishImg);
    }
  }
}
