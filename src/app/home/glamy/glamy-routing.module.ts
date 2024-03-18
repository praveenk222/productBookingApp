import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlamyPage } from './glamy.page';

const routes: Routes = [
  {
    path: '',
    component: GlamyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlamyPageRoutingModule {}
