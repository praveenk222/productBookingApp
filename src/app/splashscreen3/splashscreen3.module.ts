import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Splashscreen3PageRoutingModule } from './splashscreen3-routing.module';

import { Splashscreen3Page } from './splashscreen3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Splashscreen3PageRoutingModule
  ],
  declarations: [Splashscreen3Page]
})
export class Splashscreen3PageModule {}
