import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { ListComponent } from './list/list.component';
import { BasketComponent } from './basket/basket.component';
import { SharedModule } from 'src/shared/shared.module';
import { ListBySubcategoryComponent } from './list-by-subcategory/list-by-subcategory.component';
import { HomePage } from '../home/home.page';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
 
  ],
  declarations: [ 

    ListComponent,
    BasketComponent,
    ListBySubcategoryComponent
  ],
   
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class FolderPageModule {}
