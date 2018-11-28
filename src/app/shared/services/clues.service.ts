// import { Http } from '@angular/http';
import { SkyAuthHttp } from '@blackbaud/skyux-builder/runtime';
import { Clue } from '../domain/clue';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class CluesService {
  constructor(
    private service: SkyAuthHttp
  ) {}

  public fetch(): Observable<Clue[]> {
    return this.service
      .get('https://localhost:8443/http://jservice.io/api/clues%3Fcategory=4')
      .map(response => response.json());
  }

  public create(clue: Clue): Observable<Clue> {
    return this.service
      .post('https://localhost:8443/http://jservice.io/api/clues%3Fcategory=4', clue)
      .map(response => response.json());
  }
}
