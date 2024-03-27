import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageaccountPageRoutingModule } from './manageaccount-routing.module';

import { ManageaccountPage } from './manageaccount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageaccountPageRoutingModule
  ],
  declarations: [ManageaccountPage]
})
export class ManageaccountPageModule {}
