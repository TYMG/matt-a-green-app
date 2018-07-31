import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RpdrFLRoutingModule } from './rpdr-fl-routing.module';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LeagueOverviewComponent } from './league-overview/league-overview.component';
import { TeamOverviewComponent } from './team-overview/team-overview.component';
import { DraftCenterComponent } from './draft-center/draft-center.component';
import { QueensOverviewComponent } from './queens-overview/queens-overview.component';
import { QueenDetailsComponent } from './queen-details/queen-details.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    RpdrFLRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: [HomeComponent, LoginComponent, UserProfileComponent, LeagueOverviewComponent, TeamOverviewComponent, DraftCenterComponent, QueensOverviewComponent, QueenDetailsComponent, PageNotFoundComponent]
})
export class RpdrFlModule { }
