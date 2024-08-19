import { Component } from '@angular/core';
import { CustomSpinnerComponent } from '../../../common/utility/custom-spinner/custom-spinner.component';
import { FunFact } from '../../../data/fun-fact.model';

@Component({
  selector: 'app-fun-facts',
  standalone: true,
  imports: [CustomSpinnerComponent],
  templateUrl: './fun-facts.component.html',
  styles: ``,
})
export class FunFactsComponent {
  funFacts: FunFact[] = [
    {
      icon: 'icofont-home',
      value: 3468,
      label: 'Hospital Rooms',
    },
    {
      icon: 'icofont-user-alt-3',
      value: 557,
      label: 'Specialist Doctors',
    },
    {
      icon: 'icofont-simple-smile',
      value: 4379,
      label: 'Happy Patients',
    },
    {
      icon: 'icofont-table',
      value: 32,
      label: 'Years of Experience',
    },
  ];
}
