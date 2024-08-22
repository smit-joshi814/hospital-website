import { Component } from '@angular/core';
import { DepartmentComponent } from '../department/department.component';
import { DoctorComponent } from '../doctor/doctor.component';
import { InquiriesComponent } from '../inquiries/inquiries.component';
import { AppointmentComponent } from '../appointment/appointment.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DepartmentComponent, DoctorComponent,InquiriesComponent,AppointmentComponent],
  templateUrl: './dashboard.component.html',
  styles: ``,
})
export class DashboardComponent {}
