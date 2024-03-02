import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { SharedModule } from 'src/shared/shared.module';
import { TabsPage } from './folder/tabs/tabs.page';
import { Tab1Page } from './folder/tab1/tab1.page';
import { Tab2Page } from './folder/tab2/tab2.page';
import { Tab3Page } from './folder/tab3/tab3.page';
import { SwapbookComponent } from './folder/swapbook/swapbook.component';
import { FolderPage } from './folder/folder.page';

@NgModule({
  declarations: [
    AppComponent,
    TabsPage,
    Tab1Page,
    Tab2Page,
    Tab3Page,
    SwapbookComponent
  ],


  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    IonicStorageModule.forRoot({ name: "mylocaldb" }),
    BrowserAnimationsModule,
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },MatDatepickerModule,
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3000 ,    horizontalPosition: 'end',
    verticalPosition: 'bottom',} },
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
