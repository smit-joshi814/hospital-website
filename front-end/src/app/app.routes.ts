import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServiceComponent } from './pages/service/service.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { MainComponent } from './layouts/main/main.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Main Component',
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
    path: 'auth',
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
    path: 'admin',
    title: 'Admin Dashboard',
    component: AdminComponent,
    children: [
      {
        path: '',
        title: 'dashboard',
        component: DashboardComponent,
      },
      {
        path:'dashboard',
        title: 'dashboard',
        component:DashboardComponent
      }
    ],
  },
  {
    path: '**',
    title: 'Page Not Found',
    component: Error404Component,
  },
];
