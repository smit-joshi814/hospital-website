import { Component } from '@angular/core';
import { CustomSpinnerComponent } from '../../../common/utility/custom-spinner/custom-spinner.component';
import { PricingTableItem } from '../../../data/pricing-table.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports:[CustomSpinnerComponent],
  templateUrl: './table.component.html',
  styles: ``
})
export class TableComponent {
  pricingTableItems: PricingTableItem[] = [
    {
      icon: 'icofont-ui-cut',
      title: 'Plastic Surgery',
      price: '$1,500',
      features: [
        'Consultation with a board-certified plastic surgeon',
        'Personalized surgical plan',
        'Pre-surgery health assessment',
        'Post-operative care and follow-up',
        'Minimal downtime and quick recovery'
      ],
      link: '#book-plastic-surgery'
    },
    {
      icon: 'icofont-tooth',
      title: 'Teeth Whitening',
      price: '$350',
      features: [
        'Professional teeth whitening treatment',
        'Customizable whitening options',
        'In-office whitening session',
        'Home care kit for extended results',
        'Free initial consultation'
      ],
      link: '#book-teeth-whitening'
    },
    {
      icon: 'icofont-heart-beat',
      title: 'Heart Surgery',
      price: '$10,000',
      features: [
        'Comprehensive cardiac evaluation',
        'Advanced heart surgery procedures',
        'Experienced cardiac surgeons',
        'State-of-the-art surgical facilities',
        '24/7 post-surgery monitoring and care'
      ],
      link: '#book-heart-surgery'
    }
  ];
  
}
