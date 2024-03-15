import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Splashscreen1PageRoutingModule } from './splashscreen1-routing.module';

import { Splashscreen1Page } from './splashscreen1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Splashscreen1PageRoutingModule
  ],
  declarations: [Splashscreen1Page]
})
export class Splashscreen1PageModule {}
