import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CopyrightComponent } from '../utility/copyright/copyright.component';
import {
  AboutUs,
  OpenHours,
  QuickLink,
  SocialLink,
} from '../../data/footer-data.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CopyrightComponent,NgFor],
  templateUrl: './footer.component.html',
  styles: ``,
})
export class FooterComponent {

  hospitalName = 'Hospital Name';
  aboutUs: AboutUs = {
    description:
      'At ' +
      this.hospitalName +
      ', we are committed to providing exceptional healthcare services with a focus on compassion, expertise, and innovation. Our dedicated team of medical professionals is here to ensure that you and your loved ones receive the highest quality of care in a supportive and state-of-the-art environment.',
  };

  socialLinks: SocialLink[] = [
    { url: 'https://facebook.com/yourpage', icon: 'icofont-facebook' },
    { url: 'https://plus.google.com/yourpage', icon: 'icofont-google-plus' },
    { url: 'https://twitter.com/yourpage', icon: 'icofont-twitter' },
    { url: 'https://vimeo.com/yourpage', icon: 'icofont-vimeo' },
    { url: 'https://pinterest.com/yourpage', icon: 'icofont-pinterest' },
  ];

  quickLinksLeft: QuickLink[] = [
    { url: '/home', label: 'Home' },
    { url: '/about', label: 'About Us' },
  ];

  quickLinksRight: QuickLink[] = [
    { url: '/services', label: 'Services' },
    { url: '/contact', label: 'Contact Us' },
  ];

  openHours: OpenHours = {
    description:
      'At ' +
      this.hospitalName +
      ', we are dedicated to being available when you need us most. Our team is here to provide excellent care during our convenient hours of operation.',
    hours: [
      { day: 'Monday - Friday', time: '08:00 AM - 08:00 PM' },
      { day: 'Saturday', time: '09:00 AM - 06:30 PM' },
      { day: 'Sunday', time: 'Closed' },
    ],
  };
}
