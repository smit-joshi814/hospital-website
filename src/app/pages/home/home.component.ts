import { Component } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FeaturesComponent } from './features/features.component';
import { FunFactsComponent } from './fun-facts/fun-facts.component';
import { WhyChooseComponent } from './why-choose/why-choose.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TableComponent } from './table/table.component';
import { BlogComponent } from './blog/blog.component';
import { ClientsComponent } from './clients/clients.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent,ScheduleComponent,FeaturesComponent,FunFactsComponent,WhyChooseComponent,CallToActionComponent,PortfolioComponent,TableComponent,BlogComponent,ClientsComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

}
