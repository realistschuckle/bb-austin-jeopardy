import { NgModule } from '@angular/core';
import { CluesService } from './shared/services/clues.service';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  providers: [CluesService],
  entryComponents: []
})
export class AppExtrasModule { }
