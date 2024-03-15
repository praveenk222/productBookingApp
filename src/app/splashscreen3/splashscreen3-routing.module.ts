import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Splashscreen3Page } from './splashscreen3.page';

const routes: Routes = [
  {
    path: '',
    component: Splashscreen3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Splashscreen3PageRoutingModule {}
