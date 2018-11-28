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
      .map(response => response.json())
      .map(clues => clues.filter((clue: Clue) => clue.value))
      .map(clues => clues.reduce((acc: any, clue: Clue) => {
        if (!acc[clue.value]) {
          acc[clue.value] = clue;
        }
        return acc;
      }, {}))
      .map(o => Object.keys(o).map(key => o[key]))
      .map(clues => clues.sort((a: Clue, b: Clue) => {
        if (a.value < b.value) { return -1; }
        if (a.value > b.value) { return 1; }
        return 0;
      }))
      .map(clues => clues.slice(0, 5));
  }
}
