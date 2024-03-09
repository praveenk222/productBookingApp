import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FolderPage } from './folder/folder.page';
import { MyaddressPage } from './myaddress/myaddress.page';
import { WishlistPage } from './wishlist/wishlist.page';
import { ProfilePage } from './profile/profile.page';
import { MyBagPage } from './my-bag/my-bag.page';

const routes: Routes = [

];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
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
          {
            path: 'swap',
            loadChildren: () => import('./swap/swap.module').then((m) => m.SwapPageModule),
          },
          {
            path: 'myaddress',
            loadChildren: () => import('./myaddress/myaddress.module').then((m) => m.MyaddressPageModule),
          },
          {
            path: 'profile',
            loadChildren: () => import('./profile/profile.module').then((m) => m.ProfilePageModule),
          },
          {
            path: 'wishlist',
            loadChildren: () => import('./wishlist/wishlist.module').then((m) => m.WishlistPageModule),
          },
          {
            path: 'my-bag',
            loadChildren: () => import('./my-bag/my-bag.module').then((m) => m.MyBagPageModule),
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
