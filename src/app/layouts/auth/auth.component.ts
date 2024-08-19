import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../common/footer/footer.component';
import { CopyrightComponent } from '../../common/utility/copyright/copyright.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet, CopyrightComponent],
  template: `
    <router-outlet></router-outlet>
    <div class="footer">
      <app-copyright />
    </div>
  `,
  styles: ``,
})
export class AuthComponent {}
