import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { HomepageComponent } from './homepage/homepage.component';
import { NearhubComponent } from './homepage/nearhub/nearhub.component';
import { ListComponent } from './list/list.component';
import { BasketComponent } from './basket/basket.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,


  ],
  declarations: [
    FolderPage,
    HomepageComponent,
    NearhubComponent,
    ListComponent,
    BasketComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class FolderPageModule {}
