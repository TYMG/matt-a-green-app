import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueRoutingModule } from './league-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromLeague from './reducers/league.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LeagueEffects } from './effects/league.effects';

@NgModule({
  imports: [
    CommonModule,
    LeagueRoutingModule,
    StoreModule.forFeature('league', fromLeague.reducer),
    EffectsModule.forFeature([LeagueEffects])
  ],
  declarations: []
})
export class LeagueModule { }
