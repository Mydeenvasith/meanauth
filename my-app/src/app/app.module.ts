import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { ValidateService } from './services/validate.service';
import { AuthserviceService } from './services/authservice.service';



const appRoutes:Routes = [
{ path:'', component: LoginComponent},
{ path:'login', component: LoginComponent},
{ path:'register', component: RegisterComponent},
{ path:'dashboard', component: NavbarComponent},
{ path:'profile', component: ProfileComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
    timeOut: 10000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    }),
  // ToastrModule added
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ValidateService,AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
