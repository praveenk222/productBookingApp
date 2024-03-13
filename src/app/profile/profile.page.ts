import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  displayIcon = false;
  profileList = [
    { icon1: 'person-outline', listname: 'Manage Accounts',link:'/manageaccount'},
    { icon1: 'cube-outline', listname: 'My Orders',link:'/myorders'},
    { icon1: 'wallet-outline', listname: 'Payments',link:'/payments'},
    { icon1: 'cube', listname: 'Bookwise',link:'/bookswise'},
    { icon1: 'heart-outline', listname: 'Wishlist',link:'/wishlist'},
    { icon1: 'pricetag-outline', listname: 'Coupouns',link:'/coupans'},
    { icon1: 'help-circle-outline', listname: 'Help Center',link:'/helpcenter'},
   
  ];
}
