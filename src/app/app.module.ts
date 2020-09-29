import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './user/user.component';
import { DashComponent } from './dash/dash.component';
import { ProComponent } from './pro/pro.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { MycartComponent } from './mycart/mycart.component';
import { MyorderComponent } from './myorder/myorder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddressformComponent } from './addressform/addressform.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CameraComponent } from './camera/camera.component';
import { CameradetailsComponent } from './cameradetails/cameradetails.component';
import { LaptopComponent } from './laptop/laptop.component';
import { LaptopdetailsComponent } from './laptopdetails/laptopdetails.component';
import { ComputerdetailsComponent } from './computerdetails/computerdetails.component';
import { ComputerComponent } from './computer/computer.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignupComponent,
    UserComponent,
    DashComponent,
    ProComponent,
    ProductdetailsComponent,
    UserprofileComponent,
    MycartComponent,
    MyorderComponent,
    AddressformComponent,
    OrderpageComponent,
    AboutusComponent,
    CameraComponent,
    CameradetailsComponent,
    LaptopComponent,
    LaptopdetailsComponent,
    ComputerdetailsComponent,
    ComputerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule
   
    
  ],
  // exports:[
  //   HttpClientModule
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
