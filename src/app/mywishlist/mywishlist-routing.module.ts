import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MywishlistPage } from './mywishlist.page';

const routes: Routes = [
  {
    path: '',
    component: MywishlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MywishlistPageRoutingModule {}
