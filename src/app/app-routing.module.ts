import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FolderPage } from './folder/folder.page';
import { TrackmyorderPage } from './home/trackmyorder/trackmyorder.page';
import { SearchresultPage } from './home/searchresult/searchresult.page';
import { ProductviewPage } from './home/productview/productview.page';
import { NotificationPage } from './home/notification/notification.page';
import { SignupPage } from './home/signup/signup.page';
import { GlamyPage } from './home/glamy/glamy.page';
import { ProductDetailsComponent } from './home/product-details/product-details.component';
import { HomePage } from './home/home.page';

const routes: Routes = [
  {
    path: '',
      component: HomePage,
  },
    {
      path: 'folder',
      component: FolderPage,
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
          path:'productview',
          loadChildren:() =>import('./home/productview/productview.module').then((m)=>m.ProductviewPageModule)
        },
        {
          path:'trackmyorder',
          loadChildren:() =>import('./home/trackmyorder/trackmyorder.module').then((m)=>m.TrackmyorderPageModule)
          
        },
        {
          path:'searchresult',
          loadChildren:() =>import('./home/searchresult/searchresult.module').then((m)=>m.SearchresultPageModule)
          
        },
        {
          path:'notification',
          loadChildren:() =>import('./home/notification/notification.module').then((m)=>m.NotificationPageModule)
          
        },
        {
          path:'signup',
          loadChildren:() =>import('./home/signup/signup.module').then((m)=>m.SignupPageModule)
          
        },
        {
          path:'glamy',
          loadChildren:() =>import('./home/glamy/glamy.module').then((m)=>m.GlamyPageModule)
          
        },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
   
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
