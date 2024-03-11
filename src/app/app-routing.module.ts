import { FolderPageModule } from './folder/folder.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FolderPage } from './folder/folder.page';
import { TrackmyorderPage } from './home/trackmyorder/trackmyorder.page';
import { SearchresultPage } from './home/searchresult/searchresult.page';
import { ProductviewPage } from './home/productview/productview.page';



@NgModule({
  imports: [
  
    RouterModule.forRoot([
      {
        path: '',
        component:FolderPage,
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
            path:'Productview',
            loadChildren:() =>import('./home/productview/productview.module').then((m)=>m.ProductviewPageModule)
          },
      
          {
            path:'searchresult',
            loadChildren:() =>import('./home/searchresult/searchresult.module').then((m)=>m.SearchresultPageModule)
          },
          {
            path:'trackmyorder',
            loadChildren:() =>import('./home/trackmyorder/trackmyorder.module').then((m)=>m.TrackmyorderPageModule)
            
          },
          // {
          //   path: 'wishlist',
          //   loadChildren: () => import('./wishlist/wishlist.module').then((m) => m.WishlistPageModule),
          // },
          {
            path: 'mybag',
            loadChildren: () => import('./mybag/mybag.module').then((m) => m.MybagPageModule),
          },
          {
            path: 'folder',
            loadChildren: () => import('./folder/folder.module').then((m) => m.FolderPageModule),
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
