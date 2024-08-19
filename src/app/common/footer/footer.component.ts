import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CopyrightComponent } from '../utility/copyright/copyright.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports:[RouterLink,CopyrightComponent],
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent{

 
}