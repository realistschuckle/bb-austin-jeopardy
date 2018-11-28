import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/takeWhile';

@Injectable()
export class CountdownService {
  public ticker(value: number): Observable<number> {
    return Observable.timer(0, 1000)
      .map((timerCount: number) => value - timerCount)
      .takeWhile((remainingValue: number) => remainingValue >= 0);
  }
}
