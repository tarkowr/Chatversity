import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Component Import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './Component/error/error.component';

// Home Module Import
import { DashboardComponent } from './Modules/home/dashboard/dashboard.component';
import { ProfileComponent } from './Modules/home/profile/profile.component';
import { SmallComponent } from './Modules/home/profile/small/small.component';
import { SettingsComponent } from './Modules/home/settings/settings.component';

// Onboarding Module Import
import { LoginComponent } from './Modules/onboarding/login/login.component';
import { SignupComponent } from './Modules/onboarding/signup/signup.component';
import { ForgotComponent } from './Modules/onboarding/forgot/forgot.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
