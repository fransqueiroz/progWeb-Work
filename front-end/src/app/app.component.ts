import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: []
})
export class AppComponent {
  title = 'Sistema Banco FATEC de Oportunidades';
}
// <app-main-toolbar [appName]="title"></app-main-toolbar>