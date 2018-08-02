import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeeklyResultHomeComponent } from './components/weekly-result-home/weekly-result-home.component';

const routes: Routes = [
  {path: '', component: WeeklyResultHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeeklyResultsRoutingModule { }
