import { Component } from '@angular/core';
import { CustomSpinnerComponent } from '../../../common/utility/custom-spinner/custom-spinner.component';
import { WhyChooseData } from '../../../data/why-choose.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-why-choose',
  standalone: true,
  imports: [CustomSpinnerComponent, NgFor],
  templateUrl: './why-choose.component.html',
  styles: ``,
})
export class WhyChooseComponent {
  whyChooseData: WhyChooseData = {
    sectionTitle: 'Why Choose Our Services?',
    sectionImage: 'assets/img/section-img.png',
    sectionDescription:
      'We are committed to delivering exceptional care with a personalized approach to each patient’s needs. Our team of dedicated professionals ensures the highest quality of care and the latest in medical advancements.',
    chooseLeft: {
      title: 'Why Our Patients Trust Us',
      content:
        'Our clinic offers comprehensive medical services with a focus on personalized care. We combine state-of-the-art technology with compassionate service to provide outstanding patient experiences.',
      listItems: [
        'Experienced and certified medical professionals.',
        'State-of-the-art facilities and technology.',
        'Comprehensive and personalized patient care.',
        'Convenient appointment scheduling and flexible hours.',
      ],
    },
    chooseRight: {
      videoUrl: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ', // Example URL for an informative or promotional video
    },
  };
}
