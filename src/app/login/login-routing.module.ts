import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';
import { LogComponent } from './log/log.component';
import { VerificationComponent } from './verification/verification.component';

const routes: Routes = [
  {
    path: 'login',
    component: LogComponent
  },
  {
    path: 'verify',
    component: VerificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
