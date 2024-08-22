import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SliderItem } from '../../../data/slider-item.model';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './slider.component.html',
  styles: ``,
})
export class SliderComponent {
  sliders: SliderItem[] = [
    {
      backgroundImage: 'assets/img/slider2.jpg',
      title: 'Comprehensive',
      subtitle: 'Healthcare Solutions',
      description:
        'Experience the best in medical care, tailored to meet your individual needs. We are committed to your well-being.',
      buttons: [
        { text: 'Get Appointment', link: '/appointment' },
        { text: 'Learn More', link: '/appointment', isPrimary: true },
      ],
    },
    {
      backgroundImage: 'assets/img/slider.jpg',
      title: 'Expert',
      subtitle: 'Medical Care',
      description:
        'Our team of specialists is dedicated to providing the highest quality care with compassion and expertise.',
      buttons: [
        { text: 'Get Appointment', link: '/appointment' },
        { text: 'Learn More', link: '/appointment', isPrimary: true },
      ],
    },
    {
      backgroundImage: 'assets/img/slider3.jpg',
      title: 'Trusted',
      subtitle: 'Health Services',
      description:
        'Trust us to be your partner in health. We offer a wide range of services to ensure your health is in good hands.',
      buttons: [
        { text: 'Get Appointment', link: '/appointment' },
        { text: 'Learn More', link: '/appointment', isPrimary: true },
      ],
    },
  ];
}
