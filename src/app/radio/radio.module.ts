import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadioPageRoutingModule } from './radio-routing.module';

import { RadioPage } from './radio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadioPageRoutingModule
  ],
  declarations: [RadioPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class RadioPageModule {}
