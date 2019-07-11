import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello from App Component!</h1>
    <app-shipping></app-shipping>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-modules';
}
