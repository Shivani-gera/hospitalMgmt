import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.scss']
})
export class DoctorDashboardComponent {
  email: string = '';
  password: string = '';

  constructor() {

  }

  onLogin(): void {
    if (this.email && this.password) {
      console.log('Login successful with email:', this.email);
    } else {
      console.log('Login failed. Email or password is missing.');
    }
  }
}
