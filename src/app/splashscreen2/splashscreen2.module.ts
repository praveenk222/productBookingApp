import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Splashscreen2PageRoutingModule } from './splashscreen2-routing.module';

import { Splashscreen2Page } from './splashscreen2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Splashscreen2PageRoutingModule
  ],
  declarations: [Splashscreen2Page]
})
export class Splashscreen2PageModule {}
