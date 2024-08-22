import { Component } from '@angular/core';
import { ScheduleItem } from '../../../data/schedule-item.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports:[RouterLink],
  templateUrl: './schedule.component.html',
  styles: ``,
})
export class ScheduleComponent {
  scheduleItems: ScheduleItem[] = [
    {
      icon: 'fa fa-ambulance',
      category: 'Emergency Services',
      title: '24/7 Emergency Care',
      description:
        'Our emergency department is open 24/7 to provide immediate care for critical and urgent medical situations.',
      linkText: 'LEARN MORE',
      linkUrl: '/emergency-services',
    },
    {
      icon: 'icofont-prescription',
      category: 'Appointments',
      title: 'Doctor\'s Schedule',
      description:
        'Check our doctors’ availability and schedule your appointments at a convenient time.',
      linkText: 'VIEW SCHEDULE',
      linkUrl: '/doctors-schedule',
    },
    {
      icon: 'icofont-ui-clock',
      category: 'Visiting Hours',
      title: 'Opening Hours',
      timings: [
        'Monday - Friday: 8:00 AM - 8:00 PM',
        'Saturday: 9:00 AM - 6:30 PM',
        'Sunday: 10:00 AM - 4:00 PM',
      ],
      linkText: 'LEARN MORE',
      linkUrl: '/visiting-hours',
    },
  ];
  
}
