import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavParams } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NearhubComponent } from './nearhub/nearhub.component';
import { SwapBatteryScrollComponent } from './swap-battery-scroll/swap-battery-scroll.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

  ],
  declarations: [HomePage,ProductDetailsComponent,NearhubComponent,SwapBatteryScrollComponent],
  providers:[NavParams],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
