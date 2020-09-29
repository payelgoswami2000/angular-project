import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddressformComponent } from './addressform/addressform.component';
import { AuthenticationGuard } from './authentication.guard';
import { DashComponent } from './dash/dash.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MycartComponent } from './mycart/mycart.component';
import { MyorderComponent } from './myorder/myorder.component';
import { OrderpageComponent } from './orderpage/orderpage.component';

import { ProComponent } from './pro/pro.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { SignupComponent } from './signup/signup.component';
import { UserprofileComponent } from './userprofile/userprofile.component';


const routes: Routes = [{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, 
{ path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) }, 
{ path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
{path:'dashboard',component:DashboardComponent},
{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
{path:'signup',component:SignupComponent},

{path:'',redirectTo:'home',pathMatch:'full'},

{path:'dash',component:DashComponent,canActivate:[AuthenticationGuard]},
{path:'pro',component:ProComponent},
{path:'productdetails/:id',component:ProductdetailsComponent},
{path:'userprofile',component:UserprofileComponent},
{path:'mycart',component:MycartComponent},
{path:'myorder',component:MyorderComponent},
{path:'orderpage',component:OrderpageComponent},
{path:'aboutus',component:AboutusComponent},
{path:'addressform',component:AddressformComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
