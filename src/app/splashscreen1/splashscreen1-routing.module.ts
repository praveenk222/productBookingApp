import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Splashscreen1Page } from './splashscreen1.page';

const routes: Routes = [
  {
    path: '',
    component: Splashscreen1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Splashscreen1PageRoutingModule {}
