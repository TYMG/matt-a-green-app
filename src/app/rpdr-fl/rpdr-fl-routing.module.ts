import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/components/login/login.component';
import { PageNotFoundComponent } from './core/containers/page-not-found/page-not-found.component';
import { AppComponent } from './app/app.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RegisterComponent } from './auth/components/register/register.component';

const routes: Routes = [
  {
    path: 'rpdr-fl', component: AppComponent, children: [
      { path: 'draft-central', loadChildren: './draft/draft.module#DraftModule' },
      { path: 'league', loadChildren: './league/league.module#LeagueModule' },
      { path: 'teams', loadChildren: './team/team.module#TeamModule', canActivate: [AuthGuard] },
      { path: 'user', loadChildren: './user/user.module#UserModule' },
      { path: 'meet-the-queens', loadChildren: './queens/queens.module#QueensModule' },
      { path: 'weekly-results', loadChildren: './weekly-results/weekly-results.module#WeeklyResultsModule' },
      { path: '', redirectTo: 'league', pathMatch: 'full' },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RpdrFLRoutingModule { }