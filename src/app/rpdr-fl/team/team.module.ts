import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromTeam from './reducers/team.reducer';


import { TeamOverviewComponent } from './components/team-overview/team-overview.component';

@NgModule({
  imports: [
    CommonModule,
    TeamRoutingModule,
    StoreModule.forFeature('team', fromTeam.reducer)
  ],
  declarations: [TeamOverviewComponent]
})
export class TeamModule { }
