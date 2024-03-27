import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageaccountPage } from './manageaccount.page';

const routes: Routes = [
  {
    path: '',
    component: ManageaccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageaccountPageRoutingModule {}
