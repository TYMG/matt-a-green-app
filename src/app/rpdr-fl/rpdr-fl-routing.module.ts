import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/components/login/login.component';
import { PageNotFoundComponent } from './core/containers/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'league', pathMatch: 'full' },
  { path: 'draft', loadChildren: './draft/draft.module#DraftModule' , outlet:'approuter' },
  { path: 'league', loadChildren: './league/league.module#LeagueModule',},
  { path: 'team', loadChildren: './team/team.module#TeamModule' },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: 'meet-the-queens', loadChildren: './queens/queens.module#QueensModule' },
  { path: 'weekly-results', loadChildren: './weekly-results/weekly-results.module#'},
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RpdrFLRoutingModule { }