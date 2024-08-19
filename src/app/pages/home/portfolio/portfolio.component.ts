import { Component } from '@angular/core';
import { CustomSpinnerComponent } from '../../../common/utility/custom-spinner/custom-spinner.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink, CustomSpinnerComponent],
  templateUrl: './portfolio.component.html',
  styles: ``,
})
export class PortfolioComponent {}
