import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { FolderPage } from '../folder/folder.page';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path:'product',
    component:ProductDetailsComponent
  },  {
    path: 'trackmyorder',
    loadChildren: () => import('./trackmyorder/trackmyorder.module').then( m => m.TrackmyorderPageModule)
  },
  {
    path: 'searchresult',
    loadChildren: () => import('./searchresult/searchresult.module').then( m => m.SearchresultPageModule)
  },
  {
    path: 'productview',
    loadChildren: () => import('./productview/productview.module').then( m => m.ProductviewPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
