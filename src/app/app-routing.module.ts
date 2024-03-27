import { FolderPageModule } from './folder/folder.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FolderPage } from './folder/folder.page';
import { MyaddressPage } from './myaddress/myaddress.page';
import { WishlistPage } from './wishlist/wishlist.page';
import { ProfilePage } from './profile/profile.page';
import { MyBagPage } from './my-bag/my-bag.page';
import { MobilenoSignupPage } from './mobileno-signup/mobileno-signup.page';
import { HomePage } from './home/home.page';
import { MainhomePage } from './mainhome/mainhome.page';
import { ViewallPage } from './viewall/viewall.page';
import { PaymentsPage } from './payments/payments.page';

const routes: Routes = [

];
@NgModule({
  imports: [

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
          {
            path: 'mobileno-signup',
            loadChildren: () => import('./mobileno-signup/mobileno-signup.module').then((m) => m.MobilenoSignupPageModule),
          },
          {
            path: 'mainhome',
            loadChildren: () => import('./mainhome/mainhome.module').then((m) => m.MainhomePageModule),
          },
          {
            path: 'myorders',
            loadChildren: () => import('./myorders/myorders.module').then((m) => m.MyordersPageModule),
          },
          {
            path: 'manageaccount',
            loadChildren: () => import('./manageaccount/manageaccount.module').then((m) => m.ManageaccountPageModule),
          },
          {
            path: 'bookswise',
            loadChildren: () => import('./bookswise/bookswise-routing.module').then((m) => m.BookswisePageRoutingModule),
          },
          {
            path: 'payments',
            loadChildren: () => import('./payments/payments.module').then((m) => m.PaymentsPageModule),
          },
          
          {
            path: 'helpcenter',
            loadChildren: () => import('./helpcenter/helpcenter.module').then((m) => m.HelpcenterPageModule),
          },
          {
            path: 'coupans',
            loadChildren: () => import('./coupans/coupans.module').then((m) => m.CoupansPageModule),
          },
          {
            path: 'checkout',
            loadChildren: () => import('./checkout/checkout.module').then((m) => m.CheckoutPageModule),
          },
      
          
          {
            path: 'viewall',
            loadChildren: () => import('./viewall/viewall.module').then((m) => m.ViewallPageModule),
          },
        ],
      },
    ]),
  ],

  exports: [RouterModule]
})

export class AppRoutingModule { }
