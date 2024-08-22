import { Component } from '@angular/core';
import { FeatureItem } from '../../../data/feature-item.model';

@Component({
  selector: 'app-features',
  standalone: true,
  templateUrl: './features.component.html',
  styles: ``
})
export class FeaturesComponent {
 featureItems: FeatureItem[] = [
    {
      icon: 'icofont-ambulance-cross',
      title: 'Emergency Help',
      description: 'Immediate assistance for urgent medical situations to ensure fast and effective care.',
    },
    {
      icon: 'icofont-medical-sign-alt',
      title: 'Enriched Pharmacy',
      description: 'Comprehensive pharmacy services with a wide range of medications and health products.',
    },
    {
      icon: 'icofont-stethoscope',
      title: 'Medical Treatment',
      description: 'Professional medical treatment provided by experienced healthcare professionals.',
    }
  ];
}
