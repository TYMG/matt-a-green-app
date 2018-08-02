import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueensRoutingModule } from './queens-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromQueens from './reducers/queens.reducer';
import { EffectsModule } from '@ngrx/effects';
import { QueensEffects } from './effects/queens.effects';

import { QueensOverviewComponent } from './components/queens-overview/queens-overview.component';
import { QueenDetailsComponent } from './components/queen-details/queen-details.component';

@NgModule({
  imports: [
    CommonModule,
    QueensRoutingModule,
    StoreModule.forFeature('queens', fromQueens.reducer),
    EffectsModule.forFeature([QueensEffects])
  ],
  declarations: [QueensOverviewComponent, QueenDetailsComponent]
})
export class QueensModule { }
