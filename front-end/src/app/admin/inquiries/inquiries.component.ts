import { Component, OnInit } from '@angular/core';
import { Contact } from '../../data/contact-form.model';
import { ContactService } from '../../services/contact/contact.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-inquiries',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './inquiries.component.html',
  styles: ``,
})
export class InquiriesComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.loadInquiries();
  }

  loadInquiries(): void {
    this.contactService.getContacts().subscribe(
      (contacts) => (this.contacts = contacts),
      (error) => console.error('Error loading inquiries', error)
    );
  }

  updateStatus(contact: Contact, newStatus: boolean) {
    const updatedContact: Contact = {
      id: contact.id,
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      subject: contact.subject,
      message: contact.message,
      status: newStatus,
    };
    this.contactService.updateContact(updatedContact).subscribe(() => {
      this.loadInquiries();
    });
  }
}
