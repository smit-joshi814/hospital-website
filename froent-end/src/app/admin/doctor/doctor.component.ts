import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../data/appointment.model';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DoctorService } from '../../services/doctor/doctor.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './doctor.component.html',
  styles: ``,
})
export class DoctorComponent implements OnInit {
  doctors: Doctor[] = [];
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

  loadDoctors(): void {
    this.doctorService.getDoctors().subscribe(
      (data) => (this.doctors = data),
      (error) => console.error('Error loading doctors', error)
    );
  }

  addDoctor(): void {
    const newDoctor: Doctor = {
      id: 0,
      name: this.doctorForm.value.doctor,
    };
    this.doctorService.addDoctor(newDoctor).subscribe(
      (doctor) => {
        this.doctors.push(doctor);
        this.doctorForm.reset();
      },
      (error) => console.error('Error adding doctor', error)
    );
  }

  openEditModel(doctor: Doctor): void {
    this.selectedDoctor = doctor;
    this.doctorForm.patchValue({
      doctor: doctor.name,
    });
  }

  updateDoctor(): void {
    if (this.selectedDoctor && this.doctorForm.valid) {
      const updatedDoctor: Doctor = {
        ...this.selectedDoctor,
        name: this.doctorForm.value.doctor,
      };
      this.doctorService.updateDoctor(updatedDoctor).subscribe(
        () => {
          const index = this.doctors.findIndex(
            (doctor) => doctor.id === updatedDoctor.id
          );
          if (index !== -1) {
            this.doctors[index] = updatedDoctor;
          }
          this.selectedDoctor = null;
          this.doctorForm.reset();
        },
        (error) => console.error('Error updating doctor', error)
      );
    }
  }

  deleteDoctor(id: number): void {
    this.doctorService.deleteDoctor(id).subscribe(
      () => {
        this.doctors = this.doctors.filter((doctor) => doctor.id !== id);
      },
      (error) => console.error('Error deleting doctor', error)
    );
  }
}
