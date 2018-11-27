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
      .get('https://buzzbaud.curtissimo.com/v1/bees')
      .map(response => response.json());
  }
}
