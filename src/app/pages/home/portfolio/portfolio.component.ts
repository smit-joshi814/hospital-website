import { Component } from '@angular/core';
import { CustomSpinnerComponent } from '../../../common/utility/custom-spinner/custom-spinner.component';
import { RouterLink } from '@angular/router';
import { PortfolioItem } from '../../../data/portfolio-item.model';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink, CustomSpinnerComponent],
  templateUrl: './portfolio.component.html',
  styles: ``,
})
export class PortfolioComponent {
  portfolioItems: PortfolioItem[] = [
    { imageUrl: 'assets/img/pf1.jpg', detailsLink: '/blog' },
    { imageUrl: 'assets/img/pf2.jpg', detailsLink: '/blog' },
    { imageUrl: 'assets/img/pf3.jpg', detailsLink: '/blog' },
    { imageUrl: 'assets/img/pf4.jpg', detailsLink: '/blog' },
    { imageUrl: 'assets/img/pf1.jpg', detailsLink: '/blog' },
    { imageUrl: 'assets/img/pf2.jpg', detailsLink: '/blog' },
    { imageUrl: 'assets/img/pf3.jpg', detailsLink: '/blog' },
    { imageUrl: 'assets/img/pf4.jpg', detailsLink: '/blog' },
  ];
}
