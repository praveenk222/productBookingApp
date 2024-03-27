import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobilenoSignupPageRoutingModule } from './mobileno-signup-routing.module';

import { MobilenoSignupPage } from './mobileno-signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MobilenoSignupPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MobilenoSignupPage]
})
export class MobilenoSignupPageModule {}
