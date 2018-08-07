import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamOverviewComponent } from './components/team-overview/team-overview.component';

const routes: Routes = [
    {path: ':team-name', component: TeamOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
