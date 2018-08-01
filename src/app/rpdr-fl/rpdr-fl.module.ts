import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { RpdrFLRoutingModule } from './rpdr-fl-routing.module';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/components/login/login.component';
import { UserProfileComponent } from './user/components/user-profile/user-profile.component';
import { LeagueOverviewComponent } from './league/components/league-overview/league-overview.component';
import { TeamOverviewComponent } from './teams/components/team-overview/team-overview.component';
import { DraftCenterComponent } from './draft/components/draft-center/draft-center.component';
import { QueensOverviewComponent } from './queens/components/queens-overview/queens-overview.component';
import { QueenDetailsComponent } from './queens/components/queen-details/queen-details.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { reducers, metaReducers } from './state';
import { environment } from '../../environments/environment';


@NgModule({
  imports: [
    CommonModule,
    RpdrFLRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
    NgbModule
  ],
  declarations: [HomeComponent, LoginComponent, UserProfileComponent, LeagueOverviewComponent, TeamOverviewComponent, DraftCenterComponent, QueensOverviewComponent, QueenDetailsComponent, PageNotFoundComponent]
})
export class RpdrFlModule { }
