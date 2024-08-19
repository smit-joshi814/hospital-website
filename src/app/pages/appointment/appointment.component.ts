import { Component } from '@angular/core';
import { CustomSpinnerComponent } from '../../common/utility/custom-spinner/custom-spinner.component';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports:[CustomSpinnerComponent],
  templateUrl: './appointment.component.html',
  styles: ``
})
export class AppointmentComponent {

}
