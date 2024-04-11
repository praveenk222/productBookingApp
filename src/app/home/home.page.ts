import { HttpClient } from '@angular/common/http';
import { Component, HostListener, Input, OnInit, inject } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfiniteScrollCustomEvent, IonContent, IonicSlides, NavController, NavParams, PopoverController } from '@ionic/angular';
import { Observable, Subscription, interval, map, timer } from 'rxjs';
import { BookingService } from 'src/Services/booking.service';
import { ProductServicesService } from 'src/Services/product-services/product-services.service';
import { HubsService } from 'src/Services/services/Hubs.service';
import { OrderService } from 'src/Services/services/Order.service';
import { LoadingService } from 'src/Services/services/loading.service';
import { environment } from 'src/environments/environment.prod';
import { UserData } from 'src/providers/user-data';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

loading: boolean = false;
  lati: any = ''; 
  longi: any = '';  
  location: any = {}
  keys: string[] = [];
  bikeHubID: any = 3502;
  slides: any = [];
  slider: any = []
  bikeHub: any;
  events: any;
  loc:any;

  itemsCopy:any;
  searchTerm:any;
  azimageUrl: any = environment.azimageUrl_hub;
  profileUrl: any = environment.azimageUrl_pic;
  username = '';
  logindata!: any;
  show: boolean = true; 
  searchValue:any=null;

  marker: any;
  hubsnearby: any = [];
  useraddress: string='';
  filteredItems: any;
  countDown!: Subscription;
  countDown$!: Observable<any>;
  counter = 0;
  tick = 300; //(interval for the timer in (Milliseconds))
  BookingStartDate: any;
  BookingEndDate: any;
  isshowTimer: boolean=false;
  bookingNo: any;
  ProductDetails: any;
  ordersList:any;
  userid: any;
  isModelOpen=false;
  greeting:any;
    toggled!: boolean;

  items!: string[];
 @ViewChild('swiper')
 swiperRef: ElementRef | undefined;
 swiper?: Swiper;
  chips=[
  {name:'Fiction',color:'primary'},
  {name:'Fantasy',color:'tertiary'},
  {name:'Horror',color:'warning'},
  {name:'Fiction',color:'primary'},
  {name:'Fantasy',color:'tertiary'},
]
 swiperSlideChanged(e: any) {
  console.log('changed: ', e);
}
initializeItems() {
    this.items = ['Amsterdam','Bogota','Mumbai','San José','Salvador']; 
 }    
toggleSearch() {
    this.toggled = this.toggled ? false : true;
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
swiperReady() {
  this.swiper = this.swiperRef?.nativeElement.swiper;
}
onIonInfinite(ev:any) {
  setTimeout(() => {
    (ev as InfiniteScrollCustomEvent).target.complete();
  }, 500);
}
  constructor(private loadingservice: LoadingService,private or_service: OrderService,
     private hub_s: HubsService,private os:OrderService,
    public popoverController: PopoverController, private _bh: BookingService, private route: ActivatedRoute, private router: Router,
    private _pd: ProductServicesService, private userdata: UserData,private http:HttpClient
  ) {
    this.userdata.getuser().then(res => {
      if (res !== null) {

        this.logindata = res;
        this.username = res.FirstName + ' ' + res.LastName;
      }
    })
    this.userdata.getId('userlocation').then(res => {
      if (res !== null) {

        this.useraddress = res;
        console.log(this.useraddress)
      }
    })
    this.userdata.getId('startTime').then(res => {
      if (res !== null) {

        this.BookingStartDate = res;
      }
    })
    this.userdata.getId('bookingNo').then(res => {
      if (res !== null) {

        this.bookingNo = res;
        this.showCounter()
      }
    })
    this.userdata.getId('endTime').then(res => {
      if (res !== null) {

        this.BookingEndDate = res;
        this.showCounter()
      }
    })

  }
  open() {

    this.isModelOpen=true;
  }
  gerOrdersByUserID() {
    this.or_service.getorderbyUserID(this.userid).subscribe(
      (res:any) => {
      this.ordersList = res;
      console.log(res)
      })
    }
  ngOnInit() {
    this.getbranchesByBID()
 
    // this.address();
  //  this.gerOrdersByUserID();
    this.getNearByHubs();
    this.status()
  }
  @ViewChild(IonContent) content!: IonContent;
  data = [];


  public sidebar: boolean = true;
  showCounter(){
    this.isshowTimer=true;
    
    let dateObject:any = new Date(this.BookingStartDate);
    let dateObject2:any = new Date(this.BookingEndDate);
    console.log(dateObject.getTime())
    console.log(dateObject2.getTime())
    this.counter = Math.floor((dateObject2.getTime()- dateObject.getTime()) / 1000);

    // Using the timer function to create an observable that decrements the counter value at a fixed interval
    this.countDown = timer(0, this.tick).subscribe(() => --this.counter);

    // Using the interval function to create an observable that emits values at a fixed interval
    this.countDown$ = interval(1000).pipe(
      map(() => {
        // Calculating the remaining time in seconds
        return Math.floor(
          (dateObject.getTime()- dateObject2.getTime()) / 1000
        );
      })
    );

    if(this.bookingNo){
      this.getDetails();

    }
  }
  getDetails() {
    this.os.getordersummeryByBookingNo(this.bookingNo).subscribe((res:any) => {
      console.log(res)
      this.ProductDetails = res;
    })
  }
  getbranchesByBID() {
    this.loadingservice.presentLoading('loading')
    this._bh.getbranchesByBID(this.bikeHubID, null).subscribe(
      (res: any) => {
        console.log('tests', res)
        this.bikeHub = res.slice(0, 4);

        this.loadingservice.dismissLoader();

      }, (error: any) => {
        this.loadingservice.dismissLoader();

      }
    )
  }
  getNearByHubs() {
    this.postadd_Data.TargetLatitude = this.lati == ''?  null : this.lati;
    this.postadd_Data.TargetLongitude = this.longi == ''?  null : this.lati;
    this.postadd_Data.branchtype=3502;
    this.hub_s.getnearByHubsBasedonLatandLongID(this.postadd_Data).subscribe((res:any) => {
      console.log('firsthubs',res)
      this.hubsnearby = res;
      this.filteredItems = res;
      this.loadingservice.dismissLoader();

    },
      (error:any) => {
        this.loadingservice.dismissLoader();
      }
    )
  }
  clearSearch() {
  this.getNearByHubs();
  }
  search(data:any){
    console.log(this.searchValue)
    this.searchValue;
     this.getNearByHubsSearch();
  }
  getNearByHubsSearch() {
    //if lati and  long is same or empty then no list
    this.loadingservice.simpleLoader('Loading...')
    this.search_data.TargetLatitude = this.lati;
    this.search_data.TargetLongitude = this.longi;
    this.search_data.branchtype=3502;
    this.search_data.SearchKeyword=this.searchValue;
    this.hub_s.getnearByHubsBasedonLatandLongIDSearch(this.search_data).subscribe(res => {
      console.log('search',res)
      this.hubsnearby = res;
      this.filteredItems = res;
      this.loadingservice.dismissLoader();

    },
      (error:any) => {
        this.loadingservice.dismissLoader();
      }
    )
  }
  //sing for lati and longi


  // address() {
  //   const map = new google.maps.Map(document.getElementById('map') as HTMLInputElement, {
  //     zoom: 8,
  //     center: {
  //       lat: this.lat.toString(),
  //       lng: this.lng.toString()
  //     }
  //   })
  //   const geocoder = new google.maps.Geocoder()
  //   const InfoWindow = new google.maps.InfoWindow()
  //   this.geocodeLatLng(geocoder)


  // }
  // geocodeLatLng(geocoder: any) {
    // const input = (document.getElementById("latlng") as HTMLInputElement)
  //   if(input.value){

  //     const latlngstr = input.value.split('', 2);
  //     const latlng = {
  //       lat: parseFloat(latlngstr[0]),
  //       lng: parseFloat(latlngstr[1]),
  //     };
  //     geocoder.geocode({ location: latlng })
  //       .then((res: any) => {
  //         console.log(res)
  //       })
  //   }
  // }
// address(){
 
//   this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=17.519523,78.381172&key=AIzaSyCU4W4iQLV5ydrW3UxZncI_JdLi1EsKH5A`).subscribe((res:any)=>{
//   this.loc=res['plus_code']  
//   console.log('addres',res)
//   console.log(res.results[0].formatted_address)
//   console.log(res.results[6].formatted_address)
//   this.useraddress=res.results[6].formatted_address
//   })
// }
  scrollToBottom() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the bottom instead of instantly
    this.content.scrollToBottom(500);
  }
  filterItems(searchTerm:any) {
      this.filteredItems = this.hubsnearby.filter((item :any)=>
        Object.values(item).some((value:any) =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
  }
  scrollToTop() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the top instead of instantly
    this.content.scrollToTop(500);
  }
 
  gotohubdetails(id:number){
    this.userdata.setNew("hubid",id)
    
        this.router.navigateByUrl('/hub-details')
      }
  postadd_Data = {
    "TargetLatitude": null,
    "TargetLongitude": null,
    "branchtype":0,
    "RadiusInKm": 50
  }
  search_data = {
    "TargetLatitude": null,
    "TargetLongitude": null,
    "branchtype":0,
    "RadiusInKm": 50,
    "SearchKeyword":null
  }


  status(){
    const date = new Date;
    const hours = date.getHours();
    const time=(hours < 12)? "Morning" :
               (((hours) <= 18 && hours >= 12 ) ? "Afternoon" : "Night");
console.log(time);
this.greeting=time
}

}


