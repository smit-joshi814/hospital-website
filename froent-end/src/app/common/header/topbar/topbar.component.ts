import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './topbar.component.html',
  styles: ``
})
export class TopbarComponent {

}
