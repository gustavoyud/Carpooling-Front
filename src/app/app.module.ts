import { UsersService } from './../services/users.service';
import { AppRouting } from './app.routing';
import { RouterModule, ChildrenOutletContexts } from '@angular/router';
import { ClientService } from './../services/client.service';
import { AuthService } from '../services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { CarsComponent } from './cars/cars.component';
import { DestinyComponent } from './destiny/destiny.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    DashboardComponent,
    RegisterComponent,
    SignupComponent,
    CarsComponent,
    DestinyComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    AppRouting,
  ],
  providers: [
    AuthService,
    ClientService,
    UsersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
