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
    { icon1: 'person-outline', listname: 'Manage Accounts', },
    { icon1: 'cube-outline', listname: 'My Orders',},
    { icon1: 'wallet-outline', listname: 'Payments',},
    { icon1: 'heart-outline', listname: 'Wishlist',},
    { icon1: 'pricetag-outline', listname: 'Coupouns',},
    { icon1: 'help-circle-outline', listname: 'Help Center',},
    { icon1: 'settings-outline', listname: 'Settings',},
  ];
}
