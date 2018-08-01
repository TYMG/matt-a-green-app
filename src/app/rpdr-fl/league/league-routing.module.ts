import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LeagueOverviewComponent } from './components/league-overview/league-overview.component';

const routes: Routes = [
  { path: 'overview', component: LeagueOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeagueRoutingModule { }
