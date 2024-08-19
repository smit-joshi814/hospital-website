import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  standalone: true,
  imports: [],
  template: `
    <!-- Copyright -->
    <div class="copyright">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-12">
            <div class="copyright-content">
              <p>
                &copy; Copyright {{ currentYear }} | All Rights Reserved by
                <a href="/home">Website</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/ End Copyright -->
  `,
  styles: ``,
})
export class CopyrightComponent implements OnInit {
  currentYear: number | undefined;

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }
}
