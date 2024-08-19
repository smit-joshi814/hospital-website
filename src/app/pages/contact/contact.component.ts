import { Component } from '@angular/core';
import { CustomSpinnerComponent } from '../../common/utility/custom-spinner/custom-spinner.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CustomSpinnerComponent],
  templateUrl: './contact.component.html',
  styles: ``,
})
export class ContactComponent {}
