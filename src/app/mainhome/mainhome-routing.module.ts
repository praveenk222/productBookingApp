import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainhomePage } from './mainhome.page';
import { ViewallPage } from '../viewall/viewall.page';

const routes: Routes = [
  {
    path: '',
    component: MainhomePage
  },
  {
    path:'viewall',
    component:ViewallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainhomePageRoutingModule {}
