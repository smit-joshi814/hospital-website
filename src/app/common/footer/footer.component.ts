import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports:[RouterLink],
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent implements OnInit {

  currentYear: number | undefined;

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }
}