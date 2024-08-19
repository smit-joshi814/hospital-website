import { Component } from '@angular/core';
import { CustomSpinnerComponent } from '../../common/utility/custom-spinner/custom-spinner.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContactForm } from '../../data/contact-form.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CustomSpinnerComponent, ReactiveFormsModule, NgIf],
  templateUrl: './contact.component.html',
  styles: ``,
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
      subscribe: new FormControl(false),
    });
  }

  onCheckboxChange(event: any) {
    this.contactForm.value.subscribe = event.target.checked;
    console.log(this.contactForm.value.subscribe);
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData: ContactForm = this.contactForm.value;
      console.log('Form Data:', formData);

      // Here, you can send the form data to the server
      // Example: this.http.post('/api/contact', formData).subscribe(...);
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
