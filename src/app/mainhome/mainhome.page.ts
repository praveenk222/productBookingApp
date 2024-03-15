import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainhome',
  templateUrl: './mainhome.page.html',
  styleUrls: ['./mainhome.page.scss'],
})
export class MainhomePage implements OnInit {

  constructor(private router: Router) {}

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
     {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvtR3s3NfpIvx67wQuhLQvRdyEKN0KL0yb7Q&usqp=CAU',title:'organic milk'},
     {image:'https://elworldorganic.com/wp-content/uploads/2022/06/A2-Desi-Cow-Ghee-1.jpg',title:'organic ghee'} ,
     {image:'https://m.media-amazon.com/images/I/71eftr9IdFL.jpg',title:'curd'} ,
     {image:'https://m.media-amazon.com/images/I/81j62n0fr-L._AC_UF1000,1000_QL80_.jpg',title:'butter milk'} 
  ]
  baglist=[
    {bagImg:'../../assets/jeans.webp',bName:'Akshayakalpa',price:'25',title:'Organic Slim milk',quantity:'500'},
    {bagImg:'../../assets/wishWatch.webp',bName:'Akshayakalpa',price:'35',title:'Organic Slim milk',quantity:'1000'},
  ]
 
}
