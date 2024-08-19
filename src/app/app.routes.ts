import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { Error404Component } from './page/error-404/error-404.component';
import { BlogComponent } from './page/blog/blog.component';
import { ContactComponent } from './page/contact/contact.component';
import { ServiceComponent } from './page/service/service.component';
import { AppointmentComponent } from './page/appointment/appointment.component';
import { LoginComponent } from './page/auth/login/login.component';
import { MainComponent } from './layouts/main/main.component';
import { AuthComponent } from './layouts/auth/auth.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Title',
    component: MainComponent,
    children: [
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
        title: 'Blog',
        component: BlogComponent,
      },
      {
        path: 'services',
        title: 'Services',
        component: ServiceComponent,
      },
      {
        path: 'contact',
        title: 'Contact',
        component: ContactComponent,
      },
      {
        path: 'appointment',
        title: 'Appointment',
        component: AppointmentComponent,
      },
    ],
  },
  {
    path: 'auth/admin',
    title: 'Admin Login',
    component: AuthComponent,
    children: [
      {
        path: '',
        title: 'Admin Login',
        component: LoginComponent,
      },
      {
        path: 'login',
        title: 'Admin Login',
        component: LoginComponent,
      },
    ],
  },
  {
    path: '**',
    title: 'Page Not Found',
    component: Error404Component,
  },
];
