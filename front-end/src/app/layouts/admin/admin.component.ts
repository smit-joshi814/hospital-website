import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminHeaderComponent } from '../../common/admin-header/admin-header.component';
import { AdminFooterComponent } from '../../common/admin-footer/admin-footer.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet,AdminHeaderComponent,AdminFooterComponent],
  templateUrl: './admin.component.html',
  styles:``
})
export class AdminComponent {

}
