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
    SharedModule,
    IonicModule,
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
