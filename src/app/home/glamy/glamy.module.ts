import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlamyPageRoutingModule } from './glamy-routing.module';

import { GlamyPage } from './glamy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlamyPageRoutingModule
  ],
  declarations: [GlamyPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GlamyPageModule {}
