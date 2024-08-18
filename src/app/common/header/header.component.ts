import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import { filter } from 'rxjs/internal/operators/filter';

@Component({
  selector: 'app-header',
  standalone: true,
  imports:[RouterLink,RouterLinkActive,TopbarComponent],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  home:string="active";

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (event.urlAfterRedirects === '/home') {
          this.home = 'active';
        } else {
          this.home = '';
        }
      });
  }

}
