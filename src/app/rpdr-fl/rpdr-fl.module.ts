import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { RpdrFLRoutingModule } from './rpdr-fl-routing.module';

import { UserRoutingModule } from './user/user-routing.module';
import { QueensRoutingModule } from './queens/queens-routing.module';
import { WeeklyResultsRoutingModule } from './weekly-results/weekly-results-routing.module';
import { } from '';



import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/components/login/login.component';
import { LeagueOverviewComponent } from './league/components/league-overview/league-overview.component';
import { TeamOverviewComponent } from './team/components/team-overview/team-overview.component';
import { DraftCenterComponent } from './draft/components/draft-center/draft-center.component';

import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { reducers, metaReducers } from './reducers';
import { environment } from '../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';


@NgModule({
  imports: [
    CommonModule,
    RpdrFLRoutingModule,
    UserRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    NgbModule,
    EffectsModule.forRoot([AppEffects])
  ],
  declarations: [
    HomeComponent,
    LoginComponent,
    UserProfileComponent,
    LeagueOverviewComponent,
    TeamOverviewComponent,
    DraftCenterComponent,
    QueensOverviewComponent,
    QueenDetailsComponent,
    PageNotFoundComponent
  ]
})
export class RpdrFlModule { }
