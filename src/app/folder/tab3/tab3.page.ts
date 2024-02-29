import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
  cards = [
    { image: 'https://w0.peakpx.com/wallpaper/454/815/HD-wallpaper-naruto-art-fictional-character-thumbnail.jpg', name: 'Naruto', price: 10, quantity: 0 },
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
