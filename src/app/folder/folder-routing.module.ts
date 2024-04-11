import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import { ListComponent } from './list/list.component';
import { BasketComponent } from './basket/basket.component';
// import { ListComponent } from './list/list.component';
// import { BasketComponent } from './basket/basket.component';
import { HomePage } from '../home/home.page';
import { ListBySubcategoryComponent } from './list-by-subcategory/list-by-subcategory.component';


const routes: Routes = [
  
  {
    path: '',
    component:HomePage,
  },

  {
    path: 'list',
    component: ListBySubcategoryComponent,
  },

 


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
