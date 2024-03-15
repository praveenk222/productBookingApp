import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Splashscreen2Page } from './splashscreen2.page';

const routes: Routes = [
  {
    path: '',
    component: Splashscreen2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Splashscreen2PageRoutingModule {}
