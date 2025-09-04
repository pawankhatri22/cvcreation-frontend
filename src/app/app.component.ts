import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Cv Creation</h1>
      <p>Welcome to your new Angular application!</p>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
      text-align: center;
    }
    h1 {
      color: #333;
    }
  `]
})
export class AppComponent {
  title = 'Cv Creation';
}
