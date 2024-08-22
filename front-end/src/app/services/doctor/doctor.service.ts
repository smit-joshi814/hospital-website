import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Doctor } from '../../data/appointment.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  private apiUrl = `${environment.apiUrl}/api/doctors`;
  constructor(private http: HttpClient) {}

  getDoctors(): Observable<Doctor[]> {
    return this.http
      .get<Doctor[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  addDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http
      .post<Doctor>(this.apiUrl, doctor)
      .pipe(catchError(this.handleError));
  }

  updateDoctor(doctor: Doctor): Observable<void> {
    return this.http
      .put<void>(`${this.apiUrl}/${doctor.id}`, doctor)
      .pipe(catchError(this.handleError));
  }

  deleteDoctor(id: number): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Backend returned an unsuccessful response code
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
