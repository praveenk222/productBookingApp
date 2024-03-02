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
cards = [
  "https://imgix.bustle.com/uploads/image/2018/11/26/303ba8eb-9308-48f3-8a71-bfa48bcc6da2-fictionbest.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg" ,
  'https://imgix.bustle.com/uploads/image/2018/11/26/303ba8eb-9308-48f3-8a71-bfa48bcc6da2-fictionbest.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg',
  'https://imgix.bustle.com/uploads/image/2018/11/26/303ba8eb-9308-48f3-8a71-bfa48bcc6da2-fictionbest.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg',
   'https://imgix.bustle.com/uploads/image/2018/11/26/303ba8eb-9308-48f3-8a71-bfa48bcc6da2-fictionbest.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg',
   'https://imgix.bustle.com/uploads/image/2018/11/26/303ba8eb-9308-48f3-8a71-bfa48bcc6da2-fictionbest.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg',
   'https://imgix.bustle.com/uploads/image/2018/11/26/303ba8eb-9308-48f3-8a71-bfa48bcc6da2-fictionbest.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg',
  'https://imgix.bustle.com/uploads/image/2018/11/26/303ba8eb-9308-48f3-8a71-bfa48bcc6da2-fictionbest.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg',
  
];
@ViewChild(IonContent) content!: IonContent;

scrollToBottom() {
  // Passing a duration to the method makes it so the scroll slowly
  // goes to the bottom instead of instantly
  this.content.scrollToBottom(1000);
}

scrollToTop() {
  // Passing a duration to the method makes it so the scroll slowly
  // goes to the top instead of instantly
  this.content.scrollToTop(500);
}
 ngOnInit(): void {
   this.device= innerHeight > 900 ? "Desktop":"laptop";
   console.log('this.device', this.device);
  

 }
 

 @ViewChild('swiper')
 swiperRef: ElementRef | undefined;
 swiper?: Swiper;

 images = [
   'https://manybooks.net/sites/default/files/styles/220x330sc/public/webform/ebook_feature_application/7996/galaxy_bridge_01_forward_command_final.jpg?itok=TQsywqWl' ,
   'https://manybooks.net/sites/default/files/styles/220x330sc/public/webform/ebook_feature_application/8306/wm_ebook.jpg?itok=UvWKNNlN',
   'https://manybooks.net/sites/default/files/styles/220x330sc/public/webform/ebook_feature_application/9021/the_baby_farm_murders_ebook.jpeg?itok=s5O8SbHR',
   'https://manybooks.net/sites/default/files/styles/220x330sc/public/webform/ebook_feature_application/8781/the-origin-of-dreams-coverfront-%5B12-10-23%5D.jpg?itok=z553KW6L',
   'https://manybooks.net/sites/default/files/styles/220x330sc/public/webform/ebook_feature_application/8821/91awfmnc1ul._sl1500_.jpg?itok=brVLW0fG',
   'https://manybooks.net/sites/default/files/styles/220x330sc/public/2023-12/91qRbebr-zL._SL1500_.jpg?itok=eqzqoiy2',
   'https://manybooks.net/sites/default/files/styles/220x330sc/public/2023-10/8157SgW4qjL._SL1500_.jpg?itok=rCRvVJaq',
   
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
