import { Component, HostListener, Input, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription, interval, of, timer } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { ViewChild, ElementRef } from '@angular/core';
import { IonContent, PopoverController } from '@ionic/angular';
import { Injectable, NgZone } from '@angular/core';
import { filter, scan } from 'rxjs/operators';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
 constructor(){

 }
 slides:any[]=[]

 ngOnInit(): void {
  this.slides=[
    {img:'https://www.skipprichard.com/wp-content/uploads/2018/12/9781501180989.jpg',name:'lords of rings'},
    {img:'https://www.skipprichard.com/wp-content/uploads/2018/12/9781501180989.jpg',name:'lords of rings'},
    {img:'https://www.skipprichard.com/wp-content/uploads/2018/12/9781501180989.jpg',name:'lords of rings'},
    {img:'https://www.skipprichard.com/wp-content/uploads/2018/12/9781501180989.jpg',name:'lords of rings'},
    {img:'https://www.skipprichard.com/wp-content/uploads/2018/12/9781501180989.jpg',name:'lords of rings'},
   ] 
 }
}

