import {
  Component, OnInit
} from '@angular/core';
import { Clue } from '../../shared/domain/clue';
import { CluesService } from '../../shared/services/clues.service';

@Component({
  selector: 'app-clue-form',
  templateUrl: './clue-form.component.html',
  styleUrls: ['./clue-form.component.scss']
})
export class ClueFormComponent implements OnInit {
  public clue: Clue;
  public errorMessage: string;
  public shouldIHideIt: boolean;

  constructor(
    private service: CluesService
  ) {}

  public ngOnInit(): void {
    this.clue = new Clue();
    this.service
      .isLoading
      .subscribe(hide => this.shouldIHideIt = hide);
  }

  public submitClue(): void {
    this.service
      .create(this.clue)
      .subscribe(
        clue => this.clue = new Clue(),                          // success handler
        err => this.errorMessage = 'That request failed. Please try again.' // error handler
      );
  }
}
