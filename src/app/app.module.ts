import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
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
// Okta Guard and Service
import { OktaAuthGuard } from './app.guard';
import { OktaAuthService } from './app.service';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { CallbackComponent } from './callback/callback.component';
import { ProtectedComponent } from './protected/protected.component';



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
    CallbackComponent,
    ProtectedComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    OktaAuthGuard,
    OktaAuthService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
