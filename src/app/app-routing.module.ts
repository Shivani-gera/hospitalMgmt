import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'doctor-dashboard/login', loadChildren: () => import('./doctor-dashboard/doctor-dashboard.module').then(m => m.DoctorDashboardModule) },
  { path: '', component: AppComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
