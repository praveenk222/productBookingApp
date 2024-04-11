import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { LogComponent } from './log/log.component';
import { VerificationComponent } from './verification/verification.component';
import { NgOtpInputModule } from 'ng-otp-input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,ReactiveFormsModule,FormsModule,NgOtpInputModule
  ],
  declarations: [LoginPage,LogComponent,VerificationComponent]
})
export class LoginPageModule {}
