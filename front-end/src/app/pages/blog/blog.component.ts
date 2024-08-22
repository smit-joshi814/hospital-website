import { Component } from '@angular/core';
import { CustomSpinnerComponent } from '../../common/utility/custom-spinner/custom-spinner.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CustomSpinnerComponent,RouterLink],
  templateUrl: './blog.component.html',
  styles:``
})
export class BlogComponent {

}
