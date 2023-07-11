import { Injectable } from '@angular/core';
import { BehaviorSubject, shareReplay, Subject, switchMap } from 'rxjs';
import { ApiServiceMockService } from './api-service-mock.service';

@Injectable()
export class ComponentStoreService {
  filter$ = new BehaviorSubject<string>('');
  items$ = this.getItems();

  constructor(private api: ApiServiceMockService) {}

  private getItems() {
    return this.filter$.pipe(
      switchMap((f) => this.api.getItems(f)),
      shareReplay({ refCount: true, bufferSize: 1 })
    );
  }
}
