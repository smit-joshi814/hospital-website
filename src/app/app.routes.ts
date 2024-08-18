import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { Error404Component } from './page/error-404/error-404.component';
import { BlogComponent } from './page/blog/blog.component';
import { ContactComponent } from './page/contact/contact.component';
import { ServiceComponent } from './page/service/service.component';
import { AppointmentComponent } from './page/appointment/appointment.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'home',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'services',
    component: ServiceComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'appointment',
    component: AppointmentComponent,
  },
  {
    path: '**',
    title: 'Page Not Found',
    component: Error404Component,
  },
];
