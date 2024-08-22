import { Component, OnInit } from '@angular/core';
import { Contact } from '../../data/contact-form.model';
import { ContactService } from '../../services/contact/contact.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { BehaviorSubject, Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-inquiries',
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe],
  templateUrl: './inquiries.component.html',
  styles: [],
})
export class InquiriesComponent implements OnInit {
  private contactsSubject = new BehaviorSubject<Contact[]>([]);
  contacts$: Observable<Contact[]> = this.contactsSubject.asObservable();

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.loadInquiries();
  }

  // Load all inquiries
  loadInquiries() {
    this.contactService
      .getContacts()
      .pipe(
        catchError((error) => {
          console.error('Error loading inquiries', error);
          return of([]); // Handle the error appropriately
        })
      )
      .subscribe((contacts) => this.contactsSubject.next(contacts));
  }

  // Update contact status
  updateStatus(contact: Contact, newStatus: boolean) {
    const updatedContact: Contact = {
      ...contact,
      status: newStatus,
    };

    this.contactService
      .updateContact(updatedContact)
      .pipe(
        catchError((error) => {
          console.error('Error updating contact', error);
          return of(null); // Handle the error appropriately
        })
      )
      .subscribe(() => {
        this.loadInquiries(); // Reload the inquiries after updating
      });
  }
}
