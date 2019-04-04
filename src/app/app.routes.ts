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
import { ProfileComponent } from './Modules/home/profile/profile.component';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';
import { SmallComponent } from './Modules/home/profile/small/small.component';
import { NewUserComponent } from './Modules/onboarding/new-user/new-user.component';
import { ViewFriendsHomeComponent } from './Modules/home/view-friends-home/view-friends-home.component';
import { ViewLatestNewsComponent } from './Modules/home/view-latest-news/view-latest-news.component';
import { ViewNavigationHomeComponent } from './Modules/home/view-navigation-home/view-navigation-home.component';

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
    { path: 'settings',  component: SettingsComponent, canActivate: [AuthGuard] },
    { path: 'messages',  component: MessagesComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: ProfileComponent },
    { path: 'small', component: SmallComponent },
    { path: 'settings-profile', component: SettingsProfileComponent },
    { path: 'view-friends-home', component: ViewFriendsHomeComponent },
    { path: 'view-latest-news', component: ViewLatestNewsComponent },
    { path: 'view-navigation-home', component: ViewNavigationHomeComponent },
    { path: 'newuser', component: NewUserComponent, canActivate: [AuthGuard] },
    { path: 'forgot',  component: ForgotComponent },
    { path: '404', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/404' },
    {
        path: 'implicit/callback',
        component: OktaCallbackComponent
    },
];
