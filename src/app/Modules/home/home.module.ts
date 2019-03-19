import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { SmallComponent } from './profile/small/small.component';

@NgModule({
  declarations: [DashboardComponent, SettingsComponent, ProfileComponent, SmallComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
