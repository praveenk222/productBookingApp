import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FolderPage } from './folder/folder.page';
import { MyordersPage } from './myorders/myorders.page';
import { RadioPage } from './radio/radio.page';
import { ConfirmorderPage } from './confirmorder/confirmorder.page';
import { LoginPage } from './login/login.page';
import { Splashscreen1Page } from './splashscreen1/splashscreen1.page';
import { Splashscreen2Page } from './splashscreen2/splashscreen2.page';
import { Splashscreen3Page } from './splashscreen3/splashscreen3.page';

const routes: Routes = [



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    RouterModule.forRoot([
      {
        path: '',
        component:LoginPage
      },
      {
        path: 'folder',
        component: FolderPage,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'home',
          },
          {
            path: 'home',
            loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
          },
          {
            path: 'radio',
            loadChildren: () => import('./radio/radio.module').then((m) => m.RadioPageModule),
          },
          {
            path: 'mybookings',
            loadChildren: () => import('./page/mybookings/mybookings.module').then((m) => m.MybookingsPageModule),
          },
          {
            path: 'myProfile',
            loadChildren: () => import('./page/myprofile/myprofile.module').then((m) => m.MyprofilePageModule),
          },
          {
            path: 'swap',
            loadChildren: () => import('./swap/swap.module').then((m) => m.SwapPageModule),
          },
          {
            path: 'myorders',
            loadChildren: () => import('./myorders/myorders.module').then((m) => m.MyordersPageModule),
          },
          {
            path: 'confirmorder',
            loadChildren: () => import('./confirmorder/confirmorder.module').then((m) => m.ConfirmorderPageModule),
          },
          {
            path: 'login',
            loadChildren: () => import('./login/login.module').then((m) => m.LoginPageModule),
          },
          {
            path: 'splashscreen1',
            loadChildren: () => import('./splashscreen1/splashscreen1.module').then((m) => m.Splashscreen1PageModule),
          },
          {
            path: 'splashscreen2',
            loadChildren: () => import('./splashscreen2/splashscreen2.module').then((m) => m.Splashscreen2PageModule),
          },
          {
            path: 'splashscreen3',
            loadChildren: () => import('./splashscreen3/splashscreen3.module').then((m) => m.Splashscreen3PageModule),
          },

        ],
      },
    ]),
  ],

  exports: [RouterModule]
})

export class AppRoutingModule { }
