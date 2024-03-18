import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.page.html',
  styleUrls: ['./productview.page.scss'],
})
export class ProductviewPage implements OnInit {
  price: number = 650;

  getPriceWithSymbol(): string {
    return `₹${this.price}`;
  }
  public device:string="";
 constructor(){ }
 slides:any[]=[]

 ngOnInit(): void {
 }

 @ViewChild('swiper')
 swiperRef: ElementRef | undefined;
 swiper?: Swiper;

 images = [
   'https://m.media-amazon.com/images/I/61z41XrLzCL._SX679_.jpg' ,
   'https://m.media-amazon.com/images/I/61SVaWEatBL._SX679_.jpg',
   'https://m.media-amazon.com/images/I/91QOcOJHfUL._SX679_.jpg',
   'https://m.media-amazon.com/images/I/51Zh5lEPigL._SX679_.jpg',
   'https://m.media-amazon.com/images/I/61iuQkwpPyL._SX679_.jpg',
   'https://m.media-amazon.com/images/I/61i3jpBXr2L._SX679_.jpg',
   'https://m.media-amazon.com/images/I/61381CODKRL._SX679_.jpg',
   
 ];

 swiperSlideChanged(e: any) {
  console.log('changed: ', e);
}

swiperReady() {
  this.swiper = this.swiperRef?.nativeElement.swiper;
}
onIonInfinite(ev:any) {
  setTimeout(() => {
    (ev as InfiniteScrollCustomEvent).target.complete();
  }, 500);
}
  
}
