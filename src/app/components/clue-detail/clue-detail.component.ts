import {
  Component, Input
} from '@angular/core';
import { Clue } from '../../shared/domain/clue';

@Component({
  selector: 'app-clue-detail',
  templateUrl: './clue-detail.component.html',
  styleUrls: ['./clue-detail.component.scss']
})
export class ClueDetailComponent {

  @Input()
  public clue: Clue;

  constructor() {}

}
