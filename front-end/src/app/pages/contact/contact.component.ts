import { Component } from '@angular/core';
import { CustomSpinnerComponent } from '../../common/utility/custom-spinner/custom-spinner.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Contact } from '../../data/contact-form.model';
import { ContactService } from '../../services/contact/contact.service';
import { RouterLink } from '@angular/router';
import { BehaviorSubject, catchError, of } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CustomSpinnerComponent, ReactiveFormsModule, NgIf, RouterLink],
  templateUrl: './contact.component.html',
  styles: [],
})
export class ContactComponent {
  contactForm: FormGroup;
  private contactAddedSubject = new BehaviorSubject<Contact | null>(null);
  contactAdded$ = this.contactAddedSubject.asObservable();
  message: string = '';

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const newContact: Contact = {
        id: 0,
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        phone: this.contactForm.value.phone,
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.message,
      };

      this.contactService
        .addContact(newContact)
        .pipe(
          catchError((error) => {
            console.error('Error adding contact', error);
            return of(null); // Handle the error appropriately
          })
        )
        .subscribe((contact) => {
          if (contact) {
            this.message = "thank you, we'll contact you soon";
            console.log('Contact added successfully', contact);
            this.contactAddedSubject.next(contact);
            this.contactForm.reset();
          }
        });
    }
  }

  // Helper methods to check form control validity
  isInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return (
      control != null && control.invalid && (control.dirty || control.touched)
    );
  }
}
