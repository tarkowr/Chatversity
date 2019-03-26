import { Routes } from '@angular/router';
import { LoginComponent } from './Modules/onboarding/login/login.component';
import { ForgotComponent } from './Modules/onboarding/forgot/forgot.component';
import { SignupComponent } from './Modules/onboarding/signup/signup.component';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { DashboardComponent } from './Modules/home/dashboard/dashboard.component';
import { AuthGuard } from './_guards/auth.guard';
import { SettingsComponent } from './Modules/home/settings/settings.component';
import { MessagesComponent } from './messages/messages.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    { path: 'signup', component: SignupComponent },
    { path: 'login',  component: LoginComponent },
    { path: 'settings',  component: SettingsComponent },
    { path: 'messages',  component: MessagesComponent },
    { path: 'forgot',  component: ForgotComponent },
    { path: '404', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/404' },
    {
        path: 'implicit/callback',
        component: OktaCallbackComponent
    },
];
