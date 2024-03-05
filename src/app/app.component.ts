import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnInit, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, NavController } from '@ionic/angular';
import { BookingService } from 'src/Services/booking.service';
import { UserData } from 'src/providers/user-data';
import { register } from 'swiper/element/bundle';
register();
import { Geolocation, GeolocationPlugin } from '@capacitor/geolocation';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Mybooking', url: 'my-booking', icon: 'briefcase' },
    { title: 'Notifications', url: 'notification', icon: 'notifications' },
    { title: 'Services', url: 'services', icon: 'browsers' },
    { title: 'Invitefriends', url: 'invite-friends', icon: 'people' },
    { title: 'Support', url: 'support', icon: 'person-add' },
    { title: 'T&C', url: 'tc', icon: 'share-social' },
    { title: 'Claims', url: 'claims', icon: 'document-text' },
    { title: 'Settings', url: 'setting', icon: 'settings' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  slides:any=[]
  lati: any = '';  
  
  useraddress:any=null;
  longi: any = '';  
  bikeHub:any;
  user:any;
  bikeHubID:any;
  username = '';
  logindata!: any;
  loggedIn:any;
  loc:any
  azimageUrl:any='https://everdevuat.blob.core.windows.net/hubs/';
  profileUrl:any='https://everdevuat.blob.core.windows.net/profilepic/';
  isModelOpen=false;
  ;
  
  
    constructor(private _bh:BookingService,private element: ElementRef,private userdata: UserData,private http:HttpClient,private route:Router,
      // private authService: SocialAuthService, 
      public navCtrl: NavController ) {
      this.userdata.getuser().then((res:any) => {
        if (res !== null) {
  
          this.logindata = res;
          console.log(this.logindata )
          this.username = res.FirstName + ' ' + res.LastName;
       
        }
      })
      this.userdata.getId('userlocation').then((res:any) => {
        if (res !== null) {
  
          this.useraddress = res;
          console.log(this.useraddress)
        }
      })
      this.userdata.getuser().then(res => {
        if (res !== null) {
  
          this.logindata = res;
          this.route.navigateByUrl('/book')
        }
        })
  
    }
    ngOnInit() {
      // this.printCurrentPosition();
      // this.slides=[];
      // this.address();

     
    }
  
  @HostListener("wheel", ["$event"])
  public onScroll(event: WheelEvent) {
    this.element.nativeElement.scrollLeft += event.deltaY;
  }
  
  
  @ViewChild(IonContent) content!: IonContent;
  
  scrollToBottom() {
    
    this.content.scrollToBottom(500);
  }
  
  scrollToTop() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the top instead of instantly
    this.content.scrollToTop(500);
  }
  

  
  
  
  getbranchesByBID() {
    this._bh.getbranchesByBID(this.bikeHubID,null).subscribe((res:any) => {
      console.log('tests',res)
      this.bikeHub = res.slice(0,4);
    
    })
  }
  show: boolean = true;  
  
  
  
  open() {
  
    this.isModelOpen=true;
  }
}
