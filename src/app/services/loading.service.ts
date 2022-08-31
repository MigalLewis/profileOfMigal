import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loadingSubject: BehaviorSubject<boolean>;

  constructor() {
    this.loadingSubject = new BehaviorSubject<boolean>(false);
  }

  startSpinner() {
    this.loadingSubject.next(true);
  }
  stopSpinner() {
    this.loadingSubject.next(false);
  }

  isLoading() {
    return this.loadingSubject;
  }

}
