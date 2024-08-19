import { Component } from '@angular/core';
import { CustomSpinnerComponent } from '../../../common/utility/custom-spinner/custom-spinner.component';
import { Client } from '../../../data/our-clients.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CustomSpinnerComponent, NgFor],
  templateUrl: './clients.component.html',
  styles: ``,
})
export class ClientsComponent {
  clients: Client[] = [
    { logoUrl: 'assets/img/client1.png' },
    { logoUrl: 'assets/img/client2.png' },
    { logoUrl: 'assets/img/client3.png' },
    { logoUrl: 'assets/img/client4.png' },
    { logoUrl: 'assets/img/client5.png' },
    { logoUrl: 'assets/img/client1.png' },
    { logoUrl: 'assets/img/client2.png' },
    { logoUrl: 'assets/img/client3.png' },
    { logoUrl: 'assets/img/client4.png' },
  ];
}
