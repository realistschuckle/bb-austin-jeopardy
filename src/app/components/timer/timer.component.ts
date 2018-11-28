import {
  Component, OnInit
} from '@angular/core';
import { CountdownService } from '../../shared/services/countdown.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  public timeLeft: number;

  constructor(
    private service: CountdownService
  ) {}

  public ngOnInit(): void {
    this.service
      .ticker(10)
      .subscribe(remaining => this.timeLeft = remaining);
  }
}
