import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { CourtsComponent } from './components/courts/courts.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { RegisterSuccessComponent } from './components/register-success/register-success.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, AdminComponent, HomeComponent, CourtsComponent, TrainersComponent, PricingComponent, RegisterSuccessComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
