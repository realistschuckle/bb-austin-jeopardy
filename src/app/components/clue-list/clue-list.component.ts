import {
  Component, OnInit
} from '@angular/core';
import { Clue } from '../../shared/domain/clue';
import { CluesService } from '../../shared/services/clues.service';

@Component({
  selector: 'app-clue-list',
  templateUrl: './clue-list.component.html',
  styleUrls: ['./clue-list.component.scss']
})
export class ClueListComponent implements OnInit {

  public clues: Clue[];
  public currentlySelectedClue: Clue;

  constructor(
    private service: CluesService
  ) {}

  public ngOnInit(): void {
    this.service
      .fetch()
      .subscribe(clues => this.clues = clues);
  }

  public selectClue(clue: Clue): void {
    this.currentlySelectedClue = clue;
  }

  public get cluesGreaterThan300(): Clue[] {
    return this.clues.filter(clue => clue.value > 300);
  }

}
