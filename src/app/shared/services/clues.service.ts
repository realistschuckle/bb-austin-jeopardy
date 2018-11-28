// import { Http } from '@angular/http';
// import { SkyAuthHttp } from '@blackbaud/skyux-builder/runtime';
import { Http } from '@angular/http';
import { Clue, ClueDto } from '../domain/clue';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class CluesService {
  constructor(
    // private service: SkyAuthHttp
    private service: Http
  ) {}

  public fetch(): Observable<Clue[]> {
    return this.service
      .get('https://localhost:8443/http://jservice.io/api/clues%3Fcategory=4')
      // HTTP Response
      .map(response => response.json())
      // List of "clue dto" objects
      .map(lotsOfClueDtosWithSomeBad => lotsOfClueDtosWithSomeBad.filter((clue: ClueDto) => clue.value && !clue.invalid_count))
      .map(goodClueDtos => goodClueDtos.slice(4, 9));
  }

  public create(clue: Clue): Observable<Clue> {
    return this.service
      .post('https://localhost:8443/http://jservice.io/api/clues%3Fcategory=4', clue)
      .map(response => response.json());
  }
}
