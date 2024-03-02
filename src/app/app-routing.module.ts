import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SwapbookComponent } from './folder/swapbook/swapbook.component';
import { FolderPage } from './folder/folder.page';

const routes: Routes = [



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    RouterModule.forRoot([
      {
        path: '',
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
        ],
      },
    ]),
  ],

  exports: [RouterModule]
})

export class AppRoutingModule { }
