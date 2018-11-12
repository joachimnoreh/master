import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class MessageService {

  errorObservable: Subject<string>;

  constructor() {
    this.errorObservable = new Subject<string>();
  }
  add(message: string) {
    this.errorObservable.next(message);
  }
}
