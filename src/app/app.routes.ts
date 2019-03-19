import { Routes } from '@angular/router';
import { CallbackComponent } from './callback/callback.component';
import { ProtectedComponent } from './protected/protected.component';
import { OktaAuthGuard } from './app.guard';
import { AppComponent } from './app.component';
import { LoginComponent } from './Modules/onboarding/login/login.component';
import { SignupComponent } from './Modules/onboarding/signup/signup.component';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { DashboardComponent } from './Modules/home/dashboard/dashboard.component';


export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    { path: 'signup', component: SignupComponent },
    { path: 'login',  component: LoginComponent },
    { path: '404', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/404' },
    {
        path: 'implicit/callback',
        component: OktaCallbackComponent
      },
      {
        path: 'protected',
        component: ProtectedComponent,
        canActivate: [ OktaAuthGuard ]
      },
];
