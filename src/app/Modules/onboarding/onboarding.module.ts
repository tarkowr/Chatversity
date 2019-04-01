import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { NewUserComponent } from './new-user/new-user.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent, ForgotComponent, NewUserComponent],
  imports: [
    CommonModule
  ]
})
export class OnboardingModule { }
