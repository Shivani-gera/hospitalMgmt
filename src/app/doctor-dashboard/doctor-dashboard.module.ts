import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorDashboardComponent } from './doctor-dashboard.component';
import { DoctorDashboardRoutingModule } from './doctor-dashboard-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DoctorDashboardComponent],
  imports: [
    CommonModule,
    DoctorDashboardRoutingModule,
    FormsModule
  ]
})
export class DoctorDashboardModule { }
