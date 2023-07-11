import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ComponentStoreService } from './../component-store.service';

@Component({
  selector: 'app-component-state-comp',
  templateUrl: './component-state-comp.component.html',
  styleUrls: ['./component-state-comp.component.css'],
  standalone: true,
  imports: [CommonModule],
  providers: [ComponentStoreService],
})
export class ComponentStateCompComponent {
  items$ = this.store.items$;

  constructor(private store: ComponentStoreService) {}

  filter(v: string) {
    this.store.filter$.next(v);
  }
}
