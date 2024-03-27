import { Component, HostListener, Input, OnInit, inject } from '@angular/core';

import { Observable, Subscription, interval, of, timer } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { ViewChild, ElementRef } from '@angular/core';
import { InfiniteScrollCustomEvent, IonContent, NavController, NavParams, PopoverController } from '@ionic/angular';
import { Injectable, NgZone } from '@angular/core';
import { filter, scan } from 'rxjs/operators';
import { Swiper } from 'swiper';
import { withEnabledBlockingInitialNavigation } from '@angular/router';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

//   public device:string="";
//  constructor(){ }
//  slides:any[]=[]
// cards = [
//   "https://imgix.bustle.com/uploads/image/2018/11/26/303ba8eb-9308-48f3-8a71-bfa48bcc6da2-fictionbest.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg" ,
//   'https://imgix.bustle.com/uploads/image/2018/11/26/303ba8eb-9308-48f3-8a71-bfa48bcc6da2-fictionbest.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg',
//   'https://imgix.bustle.com/uploads/image/2018/11/26/303ba8eb-9308-48f3-8a71-bfa48bcc6da2-fictionbest.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg',
//    'https://imgix.bustle.com/uploads/image/2018/11/26/303ba8eb-9308-48f3-8a71-bfa48bcc6da2-fictionbest.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg',
//    'https://imgix.bustle.com/uploads/image/2018/11/26/303ba8eb-9308-48f3-8a71-bfa48bcc6da2-fictionbest.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg',
//    'https://imgix.bustle.com/uploads/image/2018/11/26/303ba8eb-9308-48f3-8a71-bfa48bcc6da2-fictionbest.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg',
//   'https://imgix.bustle.com/uploads/image/2018/11/26/303ba8eb-9308-48f3-8a71-bfa48bcc6da2-fictionbest.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg',
  
// ];
// @ViewChild(IonContent) content!: IonContent;

// scrollToBottom() {
//   this.content.scrollToBottom(1000);
// }

// scrollToTop() {
//   this.content.scrollToTop(500);
// }
//  ngOnInit(): void {
//    this.device= innerHeight > 900 ? "Desktop":"laptop";
//    console.log('this.device', this.device);
  

//  }
 

//  @ViewChild('swiper')
//  swiperRef: ElementRef | undefined;
//  swiper?: Swiper;

//  images = [
//    'https://manybooks.net/sites/default/files/styles/220x330sc/public/webform/ebook_feature_application/7996/galaxy_bridge_01_forward_command_final.jpg?itok=TQsywqWl' ,
//    'https://manybooks.net/sites/default/files/styles/220x330sc/public/webform/ebook_feature_application/8306/wm_ebook.jpg?itok=UvWKNNlN',
//    'https://manybooks.net/sites/default/files/styles/220x330sc/public/webform/ebook_feature_application/9021/the_baby_farm_murders_ebook.jpeg?itok=s5O8SbHR',
//    'https://manybooks.net/sites/default/files/styles/220x330sc/public/webform/ebook_feature_application/8781/the-origin-of-dreams-coverfront-%5B12-10-23%5D.jpg?itok=z553KW6L',
//    'https://manybooks.net/sites/default/files/styles/220x330sc/public/webform/ebook_feature_application/8821/91awfmnc1ul._sl1500_.jpg?itok=brVLW0fG',
//    'https://manybooks.net/sites/default/files/styles/220x330sc/public/2023-12/91qRbebr-zL._SL1500_.jpg?itok=eqzqoiy2',
//    'https://manybooks.net/sites/default/files/styles/220x330sc/public/2023-10/8157SgW4qjL._SL1500_.jpg?itok=rCRvVJaq',
   
//  ];

 images1 = [
  'https://images-na.ssl-images-amazon.com/images/I/71HDAtriR%2BL._SL1111_.jpg' ,
  'https://images-na.ssl-images-amazon.com/images/I/71HDAtriR%2BL._SL1111_.jpg',
  'https://manybooks.net/sites/default/files/styles/220x330sc/public/webform/ebook_feature_application/9021/the_baby_farm_murders_ebook.jpeg?itok=s5O8SbHR',
  'https://manybooks.net/sites/default/files/styles/220x330sc/public/webform/ebook_feature_application/8781/the-origin-of-dreams-coverfront-%5B12-10-23%5D.jpg?itok=z553KW6L',
  'https://manybooks.net/sites/default/files/styles/220x330sc/public/webform/ebook_feature_application/8821/91awfmnc1ul._sl1500_.jpg?itok=brVLW0fG',
  'https://manybooks.net/sites/default/files/styles/220x330sc/public/2023-12/91qRbebr-zL._SL1500_.jpg?itok=eqzqoiy2',
  'https://manybooks.net/sites/default/files/styles/220x330sc/public/2023-10/8157SgW4qjL._SL1500_.jpg?itok=rCRvVJaq',
  
];

 

//  swiperSlideChanged(e: any) {
//   console.log('changed: ', e);
// }

// swiperReady() {
//   this.swiper = this.swiperRef?.nativeElement.swiper;
// }
// onIonInfinite(ev:any) {
//   setTimeout(() => {
//     (ev as InfiniteScrollCustomEvent).target.complete();
//   }, 500);
// }

constructor() { }

imageSlider!: NodeListOf<Element>;
currentSlide = 0;
maxSlide!: number;

ngOnInit(): void {
  this.imageSlider = document.querySelectorAll(".carousel");
  this.maxSlide = this.imageSlider.length - 1;
  this.imageSlider.forEach((image, index) => {
    (image as HTMLElement).style.transform = `translateX(${(index) * 100}%)`;
  });
setInterval(() => {
  this.currentSlide = this.currentSlide === this.maxSlide ? this.currentSlide = 0: this.currentSlide + 1;
    this.updateSlider()
  }, 4000);
}
updateSlider(): void {
  this.imageSlider.forEach((image, index) => {
    (image as HTMLElement).style.transform = `translateX(${(index - this.currentSlide) * 100}%)`;
  });
}
categories=[
   {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKbxkM9sqO36bCwMVRXis6VDuJpYeOqscVzg&usqp=CAU',title:'All'},
   {image:'https://i.pinimg.com/736x/82/76/bc/8276bc90ad2aeeea6ea823bd2bc81118.jpg',title:'fiction'},
   {image:'https://authority.pub/wp-content/uploads/2020/09/17.png',title:'genere'} ,
   {image:'https://i5.walmartimages.com/asr/0ea6502b-4cb2-4176-bfbf-63d0cb845909_1.77f6a15dcfb606189b287b4e156ec141.jpeg',title:'novel'} ,
   {image:'https://m.media-amazon.com/images/I/81j62n0fr-L._AC_UF1000,1000_QL80_.jpg',title:'horror'} 
]
baglist=[
  {bagImg:'../../assets/jeans.webp',bName:'Akshayakalpa',price:'25',title:'Organic Slim milk',quantity:'500'},
  {bagImg:'../../assets/wishWatch.webp',bName:'Akshayakalpa',price:'35',title:'Organic Slim milk',quantity:'1000'},
]
}

ionViewDidLoad() {
    console.log( 'ionViewDidLoad HomePage' );
}

toggleSearch() {
    this.toggled = this.toggled ? false : true;
}

initializeItems() {
    this.items = ['Amsterdam','Bogota','Mumbai','San José','Salvador']; 
 }    

triggerInput( ev: any ) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the searchbar
    let val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }  
}

@ViewChild('swiper')
swiperRef!: ElementRef | undefined;

logActiveIndex() {
  console.log(this.swiperRef?.nativeElement.swiper.activeIndex);
}

}


