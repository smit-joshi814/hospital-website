import { Component, OnInit } from '@angular/core';
import { CustomSpinnerComponent } from '../../common/utility/custom-spinner/custom-spinner.component';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Appointment, Department, Doctor } from '../../data/appointment.model';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { DepartmentService } from '../../services/department/department.service';
import { DoctorService } from '../../services/doctor/doctor.service';
import { AppointmentService } from '../../services/appointment/appointment.service';
import { RouterLink } from '@angular/router';
import { BehaviorSubject, Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [
    CustomSpinnerComponent,
    ReactiveFormsModule,
    NgFor,
    NgIf,
    RouterLink,
    AsyncPipe,
  ],
  templateUrl: './appointment.component.html',
  styles: [],
})
export class AppointmentComponent implements OnInit {
  appointmentForm: FormGroup;
  departments$!: Observable<Department[]>;
  doctors$!: Observable<Doctor[]>;
  message:string="";

  private appointmentAddedSubject = new BehaviorSubject<Appointment | null>(
    null
  );
  appointmentAdded$ = this.appointmentAddedSubject.asObservable();

  constructor(
    private fb: FormBuilder,
    private departmentService: DepartmentService,
    private doctorService: DoctorService,
    private appointmentService: AppointmentService
  ) {
    this.appointmentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      department: ['', Validators.required],
      doctor: ['', Validators.required],
      date: ['', Validators.required],
      message: [''],
    });
  }

  ngOnInit(): void {
    this.departments$ = this.loadDepartments();
    this.doctors$ = this.loadDoctors();
  }

  // Load all departments
  loadDepartments(): Observable<Department[]> {
    return this.departmentService.getDepartments().pipe(
      catchError((error) => {
        console.error('Error loading departments', error);
        return of([]); // Handle the error appropriately
      })
    );
  }

  // Load all doctors
  loadDoctors(): Observable<Doctor[]> {
    return this.doctorService.getDoctors().pipe(
      catchError((error) => {
        console.error('Error loading doctors', error);
        return of([]); // Handle the error appropriately
      })
    );
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      const newAppointment: Appointment = {
        id: 0,
        name: this.appointmentForm.value.name,
        email: this.appointmentForm.value.email,
        message: this.appointmentForm.value.message,
        phone: this.appointmentForm.value.phone,
        date: this.appointmentForm.value.date,
        department: this.appointmentForm.value.department,
        doctor: this.appointmentForm.value.doctor,
      };

      this.appointmentService
        .addApointment(newAppointment)
        .pipe(
          catchError((error) => {
            console.error('Error adding appointment', error);
            return of(null); // Handle the error appropriately
          })
        )
        .subscribe((appointment) => {
          if (appointment) {
            this.message="Appointment created successfully";
            console.log('Appointment added successfully', appointment);
            this.appointmentAddedSubject.next(appointment);
            this.appointmentForm.reset();
          }
        });
    }
  }
}
