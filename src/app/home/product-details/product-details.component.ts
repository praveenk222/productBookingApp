
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
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent  implements OnInit {
  quantity: number = 0;
  constructor() { }

  ngOnInit() {}
  
  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  images = [
    'https://m.media-amazon.com/images/I/71r55-KjjpL._SY522_.jpg' ,
    'https://m.media-amazon.com/images/I/81Q8jh4dEoL._SX679_.jpg',
    'https://m.media-amazon.com/images/I/81mnstacemL._SY522_.jpg',
    'https://m.media-amazon.com/images/I/91Mfev--rIL._SY522_.jpg',
    'https://m.media-amazon.com/images/I/91z3jM3x82L._SL1500_.jpg',
    'https://m.media-amazon.com/images/I/817nHDZNvhL._SL1500_.jpg',
    'https://m.media-amazon.com/images/I/81nRLwdz22L._SL1500_.jpg',
    
  ];
 
  
 
  swiperSlideChanged(e: any) {
   console.log('changed: ', e);
 }
 

 onIonInfinite(ev:any) {
   setTimeout(() => {
     (ev as InfiniteScrollCustomEvent).target.complete();
   }, 500);
 }
 
}