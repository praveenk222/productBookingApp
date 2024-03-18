import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
cards = [
   {offer:'30% Special Discount on Shoes',sub:'Special promotions only vaild for...'},
   {offer:'70% OFF on Diwali Sale',sub:'Checkout for Gorgeous....'},
   {offer:'30% OFF on winter Sale',sub:'Checkout for Sweaters and Jackets...'},
]

}
