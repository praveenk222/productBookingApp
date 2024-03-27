import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookswisePage } from './bookswise.page';

const routes: Routes = [
  {
    path: '',
    component: BookswisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookswisePageRoutingModule {}
