import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './mag-app/mag-app.module#MagAppModule' },
  { path: 'rpdr-fl', loadChildren: './rpdr-fl/rpdr-fl.module#RpdrFlModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
