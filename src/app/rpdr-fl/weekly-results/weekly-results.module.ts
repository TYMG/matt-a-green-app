import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeeklyResultsRoutingModule } from './weekly-results-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromWeeklyResults from './reducers/weekly-results.reducer';

@NgModule({
  imports: [
    CommonModule,
    WeeklyResultsRoutingModule,
    StoreModule.forFeature('weeklyResults', fromWeeklyResults.reducer)
  ],
  declarations: []
})
export class WeeklyResultsModule { }
