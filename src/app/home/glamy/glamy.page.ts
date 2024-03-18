import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-glamy',
  templateUrl: './glamy.page.html',
  styleUrls: ['./glamy.page.scss'],
})
export class GlamyPage implements OnInit {
  swiper: any;
  swiperRef: any;

  constructor() { }

  ngOnInit() {
  }
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
images=[
      {img:'https://i.ebayimg.com/images/g/1twAAOSwkn1ldscY/s-l1200.jpg',name:'Everyday Outfit'},
      {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEwYe_vAWaBOjxLZf2LL7co13KwTeg1__LdA&usqp=CAU',name:'Occution Outfit'},
      {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQTTmLTXHuVFRtTEc8yC-KNmTgj7V3PsHPw&usqp=CAU',name:'Hot Trends'},
      {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEKGUMypbSrsPEDELI_HMaqsO5kZ6tYJUUIg&usqp=CAU',name:'Trends'},
      {img:'https://thehouseofrare.com/cdn/shop/products/IMG_0043_4d81c6fa-5783-4baa-81f2-43b183e05466_900x.jpg?v=1708348656',name:'Floral'},
      {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMuusB1TpxxJ-6KdNMZrGqB96POMMCcaLbwg&usqp=CAU',name:'Stylish'},
      {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3VWiw47qKjhCPEHrYT71Zc-dtgKRcH7tWg&usqp=CAU',name:'Denim'},
      


]
}
