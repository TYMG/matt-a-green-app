import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { RpdrFLRoutingModule } from './rpdr-fl-routing.module';

import { DraftModule } from "./draft/draft.module";
import { DraftRoutingModule } from './draft/draft-routing.module'

import { LeagueModule } from './league/league.module';
import { LeagueRoutingModule } from './league/league-routing.module';

import { QueensModule } from './queens/queens.module';
import { QueensRoutingModule } from './queens/queens-routing.module';

import { TeamModule } from './team/team.module';
import { TeamRoutingModule } from './team/team-routing.module';

import { UserModule } from './user/user.module';
import { UserRoutingModule } from './user/user-routing.module';

import { WeeklyResultsModule } from './weekly-results/weekly-results.module';
import { WeeklyResultsRoutingModule } from './weekly-results/weekly-results-routing.module';



import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/components/login/login.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { reducers, metaReducers } from './reducers';
import { environment } from '../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';


@NgModule({
  imports: [
    CommonModule,
    RpdrFLRoutingModule,
    DraftModule,
    DraftRoutingModule,
    LeagueModule,
    LeagueRoutingModule,
    QueensModule,
    QueensRoutingModule,
    TeamModule,
    TeamRoutingModule,
    UserModule,
    UserRoutingModule,
    WeeklyResultsModule,
    WeeklyResultsRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    NgbModule,
    EffectsModule.forRoot([AppEffects])
  ],
  declarations: [
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent
  ]
})
export class RpdrFlModule { }
