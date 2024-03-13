import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FolderPage } from './folder/folder.page';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatStepperModule} from '@angular/material/stepper';
@NgModule({
  declarations: [AppComponent,FolderPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,MatStepperModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideAnimationsAsync()],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
