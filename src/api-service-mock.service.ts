import { Injectable } from '@angular/core';
import { of, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceMockService {
  constructor() {}

  getItems(filter: string) {
    return of(['as', 'ba', 'cd']).pipe(
      map((items) => items.filter((i) => i.includes(filter)))
    );
  }
}
