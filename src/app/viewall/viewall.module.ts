import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewallPageRoutingModule } from './viewall-routing.module';

import { ViewallPage } from './viewall.page';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewallPageRoutingModule,
    MatTabsModule
  ],
  declarations: [ViewallPage]
})
export class ViewallPageModule {}
