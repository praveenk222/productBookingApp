import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { FolderPage } from '../folder/folder.page';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
 
  {
    path:'product',
    component:ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
