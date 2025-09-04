import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  styleUrl: './app.component.css',
  template: `
    <div>
      Demo de Angular 19
      <button type="button" [routerLink]="['/hola']">Ir a Home</button>
      <button type="button" [routerLink]="['/chao']">Go Back</button>
    <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  title = 'prueba-angular-19';
}
