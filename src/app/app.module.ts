// Angular Component Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {AuthService} from './_services/auth.service';

// Component Import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './Component/error/error.component';

// Home Module Import
import { DashboardComponent } from './Modules/home/dashboard/dashboard.component';
import { ProfileComponent } from './Modules/home/profile/profile.component';
import { SmallComponent } from './Modules/home/profile/small/small.component';
import { SettingsComponent } from './Modules/home/settings/settings.component';

// Angular Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Onboarding Module Import
import { LoginComponent } from './Modules/onboarding/login/login.component';
import { SignupComponent } from './Modules/onboarding/signup/signup.component';
import { ForgotComponent } from './Modules/onboarding/forgot/forgot.component';

// Okta Guard and Service
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';
import { OktaAuthService } from './app.service';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { CallbackComponent } from './callback/callback.component';
import { ProtectedComponent } from './protected/protected.component';

import {
  OktaAuthModule,
} from '@okta/okta-angular';
import { routes } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './Shared/footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

const config = {
  issuer: 'https://dev-117825.okta.com',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oadacumlPWmV9j5a356'
};


@NgModule({
  declarations: [
    AppComponent,
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
    DashboardComponent,
    CallbackComponent,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    OktaAuthModule.initAuth(config),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    OktaAuthGuard,
    OktaAuthService,
    AuthService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
