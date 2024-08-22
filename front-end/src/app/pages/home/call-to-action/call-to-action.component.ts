import { Component } from '@angular/core';
import { CustomSpinnerComponent } from '../../../common/utility/custom-spinner/custom-spinner.component';
import { CallToActionData } from '../../../data/call-to-action.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [CustomSpinnerComponent,RouterLink],
  templateUrl: './call-to-action.component.html',
  styles: ``,
})
export class CallToActionComponent {
  callToActionData: CallToActionData = {
    phoneNumber: '1234 56789',
    description:
      'If you or a loved one requires urgent medical care, our team is ready to assist you 24/7. Call us immediately for expert help.',
    contactLink: '/contact', // Update with actual contact page or form link
    learnMoreLink: '/contact', // Update with a link to additional information
  };
}
