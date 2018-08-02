import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DraftCenterComponent } from './components/draft-center/draft-center.component';


const routes: Routes = [
  {path: '', component: DraftCenterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DraftRoutingModule { }
