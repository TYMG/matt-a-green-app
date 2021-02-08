import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'how-it-works', component: HowItWorksComponent }

  //{ path: 'rpdr-fl', loadChildren: './rpdr-fl/rpdr-fl.module#RpdrFlModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
