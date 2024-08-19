import { Component } from '@angular/core';
import { CustomSpinnerComponent } from '../../common/utility/custom-spinner/custom-spinner.component';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CustomSpinnerComponent],
  templateUrl: './service.component.html',
  styles: ``
})
export class ServiceComponent {

}
