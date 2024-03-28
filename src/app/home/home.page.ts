import { Component, HostListener, Input, OnInit, inject } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { InfiniteScrollCustomEvent, IonContent, NavController, NavParams, PopoverController } from '@ionic/angular';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  toggled: boolean;
  searchTerm: String = '';
  items!: string[];
  public device:string="";
  public loaded = false;
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
chips=[
  {name:'Fiction',color:'primary'},
  {name:'Fantasy',color:'tertiary'},
  {name:'Horror',color:'warning'},
  {name:'Fiction',color:'primary'},
  {name:'Fantasy',color:'tertiary'},
]
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
 books = [
  "https://imgix.bustle.com/uploads/image/2018/11/26/303ba8eb-9308-48f3-8a71-bfa48bcc6da2-fictionbest.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg" ,
  'https://imgix.bustle.com/uploads/image/2018/11/26/303ba8eb-9308-48f3-8a71-bfa48bcc6da2-fictionbest.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg',
  'https://imgix.bustle.com/uploads/image/2018/11/26/303ba8eb-9308-48f3-8a71-bfa48bcc6da2-fictionbest.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg',
   'https://imgix.bustle.com/uploads/image/2018/11/26/303ba8eb-9308-48f3-8a71-bfa48bcc6da2-fictionbest.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg',
   'https://imgix.bustle.com/uploads/image/2018/11/26/303ba8eb-9308-48f3-8a71-bfa48bcc6da2-fictionbest.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg',
   'https://imgix.bustle.com/uploads/image/2018/11/26/303ba8eb-9308-48f3-8a71-bfa48bcc6da2-fictionbest.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg',
  'https://imgix.bustle.com/uploads/image/2018/11/26/303ba8eb-9308-48f3-8a71-bfa48bcc6da2-fictionbest.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg',
  
];

 @ViewChild('swiper')
//  swiperRef: ElementRef | undefined;
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

 images1 = [
  'https://images-na.ssl-images-amazon.com/images/I/71HDAtriR%2BL._SL1111_.jpg' ,
  'https://images-na.ssl-images-amazon.com/images/I/71HDAtriR%2BL._SL1111_.jpg',
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


constructor( public navCtrl: NavController, public navParams: NavParams ) {
    this.toggled = false;
    this.initializeItems();        
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


