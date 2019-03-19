import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { ErrorComponent } from './Component/error/error.component';
import { LoginComponent } from './Component/login/login.component';
import { SignupComponent } from './Component/signup/signup.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { SettingsComponent } from './Component/settings/settings.component';
import { ForgotComponent } from './Component/login/forgot/forgot.component';
import { SmallComponent } from './Component/profile/small/small.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ErrorComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    SettingsComponent,
    ForgotComponent,
    SmallComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
