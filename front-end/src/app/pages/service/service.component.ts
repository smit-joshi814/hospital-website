import { Component } from '@angular/core';
import { CustomSpinnerComponent } from '../../common/utility/custom-spinner/custom-spinner.component';
import { Service } from '../../data/our-services.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CustomSpinnerComponent,NgFor],
  templateUrl: './service.component.html',
  styles: ``,
})
export class ServiceComponent {
  services: Service[] = [
    {
      icon: 'icofont-prescription',
      title: 'General Treatment',
      description:
        'Expert care and comprehensive treatment plans to ensure your well-being.',
    },
    {
      icon: 'icofont-tooth',
      title: 'Teeth Whitening',
      description:
        'Brighten your smile with our advanced teeth whitening services.',
    },
    {
      icon: 'icofont-heart-alt',
      title: 'Heart Surgery',
      description: 'Advanced heart surgery techniques for a healthier heart.',
    },
    {
      icon: 'icofont-listening',
      title: 'Ear Treatment',
      description:
        'Effective treatments for various ear conditions and hearing issues.',
    },
    {
      icon: 'icofont-eye-alt',
      title: 'Vision Problems',
      description:
        'Comprehensive eye care to address and correct vision problems.',
    },
    {
      icon: 'icofont-blood',
      title: 'Blood Transfusion',
      description:
        'Safe and efficient blood transfusion services for your health needs.',
    },
  ];
}
