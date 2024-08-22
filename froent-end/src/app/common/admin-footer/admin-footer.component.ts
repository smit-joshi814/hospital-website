import { Component } from '@angular/core';
import { CopyrightComponent } from '../utility/copyright/copyright.component';

@Component({
  selector: 'app-admin-footer',
  standalone: true,
  imports: [CopyrightComponent],
  template: `
    <!-- Footer Area -->
    <footer id="footer" class="footer ">
      <app-copyright />
    </footer>
    <!--/ End Footer Area -->
  `,
  styles: ``,
})
export class AdminFooterComponent {}
