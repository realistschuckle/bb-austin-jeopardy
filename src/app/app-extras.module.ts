import { NgModule } from '@angular/core';
import { CluesService } from './shared/services/clues.service';
import { CountdownService } from './shared/services/countdown.service';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  providers: [CluesService, CountdownService],
  entryComponents: []
})
export class AppExtrasModule { }
