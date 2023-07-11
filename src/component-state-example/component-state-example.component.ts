import { Component, OnInit } from '@angular/core';
import { ComponentStateCompComponent } from './../component-state-comp/component-state-comp.component';

@Component({
  selector: 'app-component-state-example',
  templateUrl: './component-state-example.component.html',
  styleUrls: ['./component-state-example.component.css'],
  imports: [ComponentStateCompComponent],
  standalone: true,
})
export class ComponentStateExampleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
