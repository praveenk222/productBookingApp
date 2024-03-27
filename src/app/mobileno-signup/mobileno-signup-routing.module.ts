import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobilenoSignupPage } from './mobileno-signup.page';

const routes: Routes = [
  {
    path: '',
    component: MobilenoSignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobilenoSignupPageRoutingModule {}
