import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LeagueOverviewComponent } from './league-overview/league-overview.component';
import { TeamOverviewComponent } from './team-overview/team-overview.component';
import { DraftCenterComponent } from './draft-center/draft-center.component';
import { QueensOverviewComponent } from './queens-overview/queens-overview.component';
import { QueenDetailsComponent } from './queen-details/queen-details.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: UserProfileComponent},
    {path: 'overview', component: LeagueOverviewComponent},
    {path: 'teams/:team-name', component: TeamOverviewComponent},
    {path: 'draft-center', component: DraftCenterComponent},
    {path: 'meet-the-queens', component: QueensOverviewComponent},
    {path: 'meet-the-queens/:queen-name', component: QueenDetailsComponent},    
    {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RpdrFLRoutingModule { }