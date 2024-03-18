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
import { FolderPage } from './folder/folder.page';
import {MatStepperModule} from '@angular/material/stepper';

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
    HttpClientModule,
    IonicStorageModule.forRoot({ name: "mylocaldb" }),
    BrowserAnimationsModule,
    MatStepperModule
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },MatDatepickerModule,
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3000 ,    horizontalPosition: 'end',
    verticalPosition: 'bottom',} },
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
