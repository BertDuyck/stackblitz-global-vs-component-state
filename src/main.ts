import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ComponentStateExampleComponent } from './component-state-example/component-state-example.component';
import { GlobalStateExampleComponent } from './global-state-example/global-state-example.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    ComponentStateExampleComponent,
    GlobalStateExampleComponent,
  ],
  template: `
    <app-component-state-example></app-component-state-example>

    <app-global-state-example></app-global-state-example>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
