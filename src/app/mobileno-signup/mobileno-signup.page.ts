import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mobileno-signup',
  templateUrl: './mobileno-signup.page.html',
  styleUrls: ['./mobileno-signup.page.scss'],
})
export class MobilenoSignupPage implements OnInit {
  phoneValid!:FormGroup

  constructor(private formBd:FormBuilder) {
    this.phoneValid = this.formBd.group({
      phoneNumber : ['', [Validators.required]]
    });
   }

  ngOnInit() {
  
  }
  }


