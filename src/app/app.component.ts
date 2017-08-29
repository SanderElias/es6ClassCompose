import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <h1>
      Welcome to {{title}}!!
    </h1>
    <hr>
    <app-demo-composition></app-demo-composition>
  `,
    styles: []
})
export class AppComponent {
    title = 'app';
}
