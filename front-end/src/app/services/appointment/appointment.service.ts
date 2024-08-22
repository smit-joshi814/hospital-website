import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Appointment } from '../../data/appointment.model';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private apiUrl = `${environment.apiUrl}/api/appointments`;

  constructor(private http: HttpClient) {}

  getAppointments(): Observable<Appointment[]> {
    return this.http
      .get<Appointment[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  addApointment(appointment: Appointment): Observable<Appointment> {
    return this.http
      .post<Appointment>(this.apiUrl, appointment)
      .pipe(catchError(this.handleError));
  }

  updateAppointment(appointment: Appointment): Observable<void> {
    return this.http
      .put<void>(`${this.apiUrl}/${appointment.id}`, appointment)
      .pipe(catchError(this.handleError));
  }

  deleteAppointment(id: number): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
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
