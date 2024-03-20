import { Component, HostListener, Input, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription, interval, of, timer } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { ViewChild, ElementRef } from '@angular/core';
import { InfiniteScrollCustomEvent, IonContent, PopoverController } from '@ionic/angular';
import { Injectable, NgZone } from '@angular/core';
import { filter, scan } from 'rxjs/operators';
import { Swiper } from 'swiper';
import { withEnabledBlockingInitialNavigation } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public device:string="";
 constructor(){ }
 slides:any[]=[]
 images = [
  'https://m.media-amazon.com/images/I/8114nckFdcL._AC_UY327_FMwebp_QL65_T1F_.jpg' ,
  'https://manybooks.net/sites/default/files/styles/220x330sc/public/webform/ebook_feature_application/8306/wm_ebook.jpg?itok=UvWKNNlN',
  'https://manybooks.net/sites/default/files/styles/220x330sc/public/webform/ebook_feature_application/9021/the_baby_farm_murders_ebook.jpeg?itok=s5O8SbHR',
  'https://manybooks.net/sites/default/files/styles/220x330sc/public/webform/ebook_feature_application/8781/the-origin-of-dreams-coverfront-%5B12-10-23%5D.jpg?itok=z553KW6L',
  'https://manybooks.net/sites/default/files/styles/220x330sc/public/webform/ebook_feature_application/8821/91awfmnc1ul._sl1500_.jpg?itok=brVLW0fG',
  'https://manybooks.net/sites/default/files/styles/220x330sc/public/2023-12/91qRbebr-zL._SL1500_.jpg?itok=eqzqoiy2',
  'https://manybooks.net/sites/default/files/styles/220x330sc/public/2023-10/8157SgW4qjL._SL1500_.jpg?itok=rCRvVJaq',
  
];
@ViewChild(IonContent) content!: IonContent;

scrollToBottom() {
  this.content.scrollToBottom(1000);
}

scrollToTop() {
  this.content.scrollToTop(500);
}
 ngOnInit(): void {
   this.device= innerHeight > 900 ? "Desktop":"laptop";
   console.log('this.device', this.device);
  

 }
 

 @ViewChild('swiper')
 swiperRef: ElementRef | undefined;
 swiper?: Swiper;
 cards = [
  'https://m.media-amazon.com/images/I/71P+4DslKmL._AC_UY327_FMwebp_QL65_.jpg' ,
  'https://m.media-amazon.com/images/I/81-TXfbCkGL._AC_UL480_FMwebp_QL65_.jpg',
  'https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UY327_FMwebp_QL65_T1F_.jpg',
  'https://m.media-amazon.com/images/I/71C7XCKckuL._AC_UY327_FMwebp_QL65_T1F_.jpg',
  'https://m.media-amazon.com/images/I/81NQA1BDlnL._AC_UY327_FMwebp_QL65_.jpg',
  'https://m.media-amazon.com/images/I/81aCMT1zKtL._AC_UY327_FMwebp_QL65_.jpg',
  'https://m.media-amazon.com/images/I/81Budsu1XBL._AC_UY327_FMwebp_QL65_.jpg',
  
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
books = [
  'https://m.media-amazon.com/images/I/91cyJhyr6CL._AC_UY327_FMwebp_QL65_.jpg' ,
  'https://m.media-amazon.com/images/I/51ZDAV0DZ6L._SY445_SX342_.jpg',
  'https://m.media-amazon.com/images/I/81KAg5fnOhL._AC_UY327_FMwebp_QL65_.jpg',
   'https://m.media-amazon.com/images/I/71baLm1F++L._AC_UY327_FMwebp_QL65_T1F_.jpg',
   'https://m.media-amazon.com/images/I/81XcxaQVDOL._AC_UY327_FMwebp_QL65_.jpg',
   'https://m.media-amazon.com/images/I/81DBK93b6jL._AC_UY327_FMwebp_QL65_.jpg',
  'https://m.media-amazon.com/images/I/81rinEgIf0L._AC_UY327_FMwebp_QL65_T1F_.jpg',
  
];

}
