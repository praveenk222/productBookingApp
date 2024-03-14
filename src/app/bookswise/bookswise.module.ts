import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookswisePageRoutingModule } from './bookswise-routing.module';

import { BookswisePage } from './bookswise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookswisePageRoutingModule
  ],
  declarations: [BookswisePage]
})
export class BookswisePageModule {}
