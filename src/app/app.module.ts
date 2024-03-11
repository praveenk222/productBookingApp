import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FolderPage } from './folder/folder.page';
@NgModule({
  declarations: [
    AppComponent,
    FolderPage,
  ],


  imports: [
    BrowserModule, 
    IonicModule.forRoot(),  
    AppRoutingModule,
 
    IonicModule,
  
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
 
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
