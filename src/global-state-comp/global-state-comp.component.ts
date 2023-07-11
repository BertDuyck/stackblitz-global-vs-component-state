import { Component, OnInit } from '@angular/core';
import { GlobalStoreService } from './../global-store.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-global-state-comp',
  templateUrl: './global-state-comp.component.html',
  styleUrls: ['./global-state-comp.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class GlobalStateCompComponent {
  items$ = this.store.items$;

  constructor(private store: GlobalStoreService) {}

  filter(v: string) {
    this.store.filter$.next(v);
  }
}
