import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../data/appointment.model';
import { DoctorService } from '../../services/doctor/doctor.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { catchError, Observable, of, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf, AsyncPipe],
  templateUrl: './doctor.component.html',
  styles: [],
})
export class DoctorComponent implements OnInit {
  private doctorsSubject = new BehaviorSubject<Doctor[]>([]);
  doctors$: Observable<Doctor[]> = this.doctorsSubject.asObservable();
  doctorForm: FormGroup;
  selectedDoctor: Doctor | null = null;

  constructor(private doctorService: DoctorService) {
    this.doctorForm = new FormGroup({
      doctor: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.loadDoctors();
  }

  // Load all doctors
  loadDoctors() {
    this.doctorService
      .getDoctors()
      .pipe(
        catchError((error) => {
          console.error('Error loading doctors', error);
          return of([]); // Handle the error appropriately
        })
      )
      .subscribe((doctors) => this.doctorsSubject.next(doctors));
  }

  // Add a new doctor
  addDoctor(): void {
    if (this.doctorForm.valid) {
      const newDoctor: Doctor = {
        id: 0,
        name: this.doctorForm.value.doctor,
      };

      this.doctorService
        .addDoctor(newDoctor)
        .pipe(
          catchError((error) => {
            console.error('Error adding doctor', error);
            return of(null); // Handle the error appropriately
          })
        )
        .subscribe((doctor) => {
          if (doctor) {
            const doctors = this.doctorsSubject.getValue();
            this.doctorsSubject.next([...doctors, doctor]);
            this.doctorForm.reset();
          }
        });
    }
  }

  // Open the modal and populate the form with the selected doctor's data
  openEditModal(doctor: Doctor): void {
    this.selectedDoctor = doctor;
    this.doctorForm.patchValue({
      doctor: doctor.name,
    });
  }

  // Update an existing doctor
  updateDoctor(): void {
    if (this.selectedDoctor && this.doctorForm.valid) {
      const updatedDoctor: Doctor = {
        ...this.selectedDoctor,
        name: this.doctorForm.value.doctor,
      };

      this.doctorService
        .updateDoctor(updatedDoctor)
        .pipe(
          catchError((error) => {
            console.error('Error updating doctor', error);
            return of(null); // Handle the error appropriately
          })
        )
        .subscribe(() => {
          const doctors = this.doctorsSubject.getValue();
          const index = doctors.findIndex(
            (doctor) => doctor.id === updatedDoctor.id
          );
          if (index !== -1) {
            doctors[index] = updatedDoctor;
            this.doctorsSubject.next([...doctors]);
          }
          this.selectedDoctor = null;
          this.doctorForm.reset();
        });
    }
  }

  // Delete a doctor
  deleteDoctor(id: number): void {
    this.doctorService
      .deleteDoctor(id)
      .pipe(
        catchError((error) => {
          console.error('Error deleting doctor', error);
          return of(null); // Handle the error appropriately
        })
      )
      .subscribe(() => {
        const doctors = this.doctorsSubject.getValue();
        this.doctorsSubject.next(doctors.filter((doctor) => doctor.id !== id));
      });
  }
}
