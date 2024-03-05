import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import { ListComponent } from './list/list.component';
import { BasketComponent } from './basket/basket.component';
// import { ListComponent } from './list/list.component';
// import { BasketComponent } from './basket/basket.component';
import { HomePage } from '../home/home.page';


const routes: Routes = [
  

  {
    path: '',
    component: HomePage,
  },

 


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
