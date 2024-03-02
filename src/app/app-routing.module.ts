import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SwapbookComponent } from './folder/swapbook/swapbook.component';
import { FolderPage } from './folder/folder.page';

const routes: Routes = [

  // {
  //   path: '',
  //   loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  // },
  // {
  //   path: 'folder',
  //   loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  // },
  {
    path: 'swapbook',
    component: SwapbookComponent
  },
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
    path: 'library',
    loadChildren: () => import('./library/library.module').then((m) => m.LibraryPageModule),
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then((m) => m.SearchPageModule),
  },
  {
    path: 'mybookings',
    loadChildren: () => import('./page/mybookings/mybookings.module').then((m) => m.MybookingsPageModule),
  },
  {
    path: 'myProfile',
    loadChildren: () => import('./page/myprofile/myprofile.module').then((m) => m.MyprofilePageModule),
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],

  exports: [RouterModule]
})

export class AppRoutingModule { }
