import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  cards = [
    { image: 'https://w0.peakpx.com/wallpaper/331/176/HD-wallpaper-kakashi-hatake.jpg', name: 'Kakashi', price: 10, quantity: 0 },
    { image: 'http://m.gettywallpapers.com/wp-content/uploads/2021/08/Obito-Uchiha-Wallpaper.jpg', name: 'Obito', price: 20, quantity: 0 },
    { image: 'https://s1.zerochan.net/Nara.Shikamaru.600.724974.jpg', name: 'Shikamaru', price: 20, quantity: 0 },
  ];

  increment(card: { quantity: number; }) {
    card.quantity++;
  }

  decrement(card: { quantity: number; }) {
    if (card.quantity > 0) {
      card.quantity--;
    }
  }
}
