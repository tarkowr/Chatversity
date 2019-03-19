import { Routes } from '@angular/router';
import { CallbackComponent } from './callback/callback.component';
import { ProtectedComponent } from './protected/protected.component';
import { OktaAuthGuard } from './app.guard';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { SignupComponent } from './Component/signup/signup.component';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';


export const routes: Routes = [
    {
        path: '',
        component: AppComponent
    },
    { path: 'signup', component: SignupComponent },
    { path: 'login',  component: LoginComponent },
    { path: '**', component: PageNotFoundComponent },
    {
        path: 'callback',
        component: CallbackComponent
      },
      {
        path: 'protected',
        component: ProtectedComponent,
        canActivate: [ OktaAuthGuard ]
      }
];
