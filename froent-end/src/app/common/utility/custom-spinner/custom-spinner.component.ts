import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-spinner',
  standalone: true,
  template: `
    <!-- Placeholder -->
    <div class="d-flex justify-content-center">
      <div class="spinner"></div>
    </div>
  `,
  styles: `
  /* Custom Spinner */
.spinner {
    width: 3rem;
    height: 3rem;
    border: 0.4rem solid #f3f3f3;
    border-top: 0.4rem solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

/* Spinner Animation */
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
  `,
})
export class CustomSpinnerComponent {}
