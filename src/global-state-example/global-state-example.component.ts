import { Component, OnInit } from '@angular/core';
import { GlobalStateCompComponent } from './../global-state-comp/global-state-comp.component';

@Component({
  selector: 'app-global-state-example',
  templateUrl: './global-state-example.component.html',
  styleUrls: ['./global-state-example.component.css'],
  standalone: true,
  imports: [GlobalStateCompComponent],
})
export class GlobalStateExampleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
