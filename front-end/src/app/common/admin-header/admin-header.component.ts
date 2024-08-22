import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './admin-header.component.html',
  styles: ``,
})
export class AdminHeaderComponent {
 
  clearStorage() {
    localStorage.clear();
  }

}
