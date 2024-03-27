import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainhome',
  templateUrl: './mainhome.page.html',
  styleUrls: ['./mainhome.page.scss'],
})
export class MainhomePage implements OnInit {

  constructor() { }

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
     {image:'https://i.pinimg.com/736x/82/76/bc/8276bc90ad2aeeea6ea823bd2bc81118.jpg',title:'fiction'},
     {image:'https://authority.pub/wp-content/uploads/2020/09/17.png',title:'genere'} ,
     {image:'https://i5.walmartimages.com/asr/0ea6502b-4cb2-4176-bfbf-63d0cb845909_1.77f6a15dcfb606189b287b4e156ec141.jpeg',title:'novel'} ,
     {image:'https://m.media-amazon.com/images/I/81j62n0fr-L._AC_UF1000,1000_QL80_.jpg',title:'horror'} 
  ]
  baglist=[
    {bagImg:'../../assets/jeans.webp',bName:'Akshayakalpa',price:'25',title:'Organic Slim milk',quantity:'500'},
    {bagImg:'../../assets/wishWatch.webp',bName:'Akshayakalpa',price:'35',title:'Organic Slim milk',quantity:'1000'},
  ]
  
}
