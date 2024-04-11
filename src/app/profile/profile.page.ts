import { Component, OnInit, ViewChild } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { IonContent } from '@ionic/angular';
import { environment } from 'src/environments/environment.prod';
import { UserData } from 'src/providers/user-data';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  // constructor() { }

  // ngOnInit() {
  // }
  // displayIcon = false;
  // profileList = [
  //   { icon1: 'person-outline', listname: 'Manage Accounts',link:'/manageaccount'},
  //   { icon1: 'cube-outline', listname: 'My Orders',link:'/myorders'},
  //   { icon1: 'wallet-outline', listname: 'Payments',link:'/payments'},
  //   { icon1: 'cube', listname: 'Bookwise',link:'/bookswise'},
  //   { icon1: 'heart-outline', listname: 'Wishlist',link:'/wishlist'},
  //   { icon1: 'pricetag-outline', listname: 'Coupouns',link:'/coupans'},
  //   { icon1: 'help-circle-outline', listname: 'Help Center',link:'/helpcenter'},
   
  // ];
  @ViewChild(IonContent) content!: IonContent;
  imageSource:any=null;
  loginuser: any;
  profileUrl: any = environment.azimageUrl_pic;
  genderdata:any=[
    {"name":'Select',"value":0},
    {"name":'Male',"value":3500},
    {"name":'Female',"value":3500},
    {"name":'Prefer not say',"value":1},
  ]
  constructor(private store:UserData) {

    this.store.getuser().then(data=>{
      if(data !== null){
        this.loginuser=data;
        
        switch (this.loginuser.MemberType) {
          case 3500:
            this.loginuser.Gender='Male';
            break;
          case 3500:
            this.loginuser.Gender='FeMale';
            break;
        
          default:
            break;
        }
        console.log(this.loginuser)
        this.imageSource=this.loginuser.ProfilePhoto;

      }
    })
   }

  ngOnInit() {}
  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source:CameraSource.Prompt
    });
  
    this.imageSource=image.dataUrl
   console.log(this.imageSource)
  };
  scrollToBottom() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the bottom instead of instantly
    this.content.scrollToBottom(500);
  }

  scrollToTop() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the top instead of instantly
    this.content.scrollToTop(500);
  }
}
