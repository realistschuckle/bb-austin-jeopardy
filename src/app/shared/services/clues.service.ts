// import { Http } from '@angular/http';
import { SkyAuthHttp } from '@blackbaud/skyux-builder/runtime';
// import { Http } from '@angular/http';
import { Clue, ClueDto } from '../domain/clue';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CluesService {
  private _isLoading: BehaviorSubject<boolean>;

  constructor(
    private service: SkyAuthHttp
  ) {
    this._isLoading = new BehaviorSubject<boolean>(undefined);
  }

  public get isLoading(): Observable<boolean> {
    return this._isLoading;
  }

  public fetch() {
    // Indicate that this is performing an HTTP operation
    this._isLoading.next(true);
    return this.service
      .get('https://localhost:8443/http://jservice.io/api/clues%3Fcategory=4')
      // Observable<Response>
      // HTTP Response
      .map(response => response.json())
      // Observable<any>
      // .map(clues => <Clue[]> clues);
      .map(lotsOfClueDtosWithSomeBad => lotsOfClueDtosWithSomeBad.filter((clue: ClueDto) => clue.value && !clue.invalid_count))
      .map(goodClueDtos => goodClueDtos.slice(4, 9))
      // Turn off the indicator
      .do(() => this._isLoading.next(false));
  }

  public create(clue: Clue): Observable<Clue> {
    return this.service
      .post('https://localhost:8443/http://jservice.io/api/clues%3Fcategory=4', clue, JSON_OPTIONS)
      .map(response => response.json());
  }
}
