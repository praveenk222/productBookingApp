import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-trackmyorder',
  templateUrl: './trackmyorder.page.html',
  styleUrls: ['./trackmyorder.page.scss'],
})
export class TrackmyorderPage implements OnInit {

  constructor(private _formBuilder: FormBuilder) {}
  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});
  thirdFormGroup: FormGroup = this._formBuilder.group({thirdCtrl: ['']});

  ngOnInit() {
  }
dresses=[
  {image:'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/o/f/o/40-lrsfnslp732563-louis-philippe-jeans-original-imagtvqmqmuq23va.jpeg?q=70',shirt:'Mens Shirt',color:'white',rate:'Rs.1999',rrate:'Rs.2999',discount:'61%. off'},
  {image:'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/3/x/f/-original-imagt853twnphqfa.jpeg?q=70',shirt:'Mens Shirt',color:'Brown',rate:'Rs.1099',rrate:'Rs.1999',discount:'61%. off'}

]

}
