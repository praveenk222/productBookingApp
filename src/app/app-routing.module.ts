import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
            path: 'library',
            loadChildren: () => import('./library/library.module').then((m) => m.LibraryPageModule),
          },
          {
            path: 'search',
            loadChildren: () => import('./search/search.module').then((m) => m.SearchPageModule),
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
