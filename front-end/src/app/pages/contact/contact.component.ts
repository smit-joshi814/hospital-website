import { Component } from '@angular/core';
import { CustomSpinnerComponent } from '../../common/utility/custom-spinner/custom-spinner.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Contact } from '../../data/contact-form.model';
import { NgIf } from '@angular/common';
import { ContactService } from '../../services/contact/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CustomSpinnerComponent, ReactiveFormsModule, NgIf],
  templateUrl: './contact.component.html',
  styles: ``,
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder,private contactService:ContactService) {
    this.contactForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    });
  }


  onSubmit() {
    if (this.contactForm.valid) {
      const newContact: Contact = {id:0,name: this.contactForm.value.name, email: this.contactForm.value.email, phone: this.contactForm.value.phone, subject: this.contactForm.value.subject, message: this.contactForm.value.message};
      this.contactService.addContact(newContact).subscribe(
        (contact) => {
          console.log('Contact added successfully', contact);
          this.contactForm.reset();
        },
        (error) => console.error('Error adding contact', error)
      );
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
