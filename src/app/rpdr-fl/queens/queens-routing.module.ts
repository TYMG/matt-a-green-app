import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QueensOverviewComponent } from './components/queens-overview/queens-overview.component';
import { QueenDetailsComponent } from './components/queen-details/queen-details.component';

const routes: Routes = [
    {path: '', component: QueensOverviewComponent},
    {path: ':name', component: QueenDetailsComponent},   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueensRoutingModule { }
