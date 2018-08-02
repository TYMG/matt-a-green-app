import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MagAppRoutingModule } from './mag-app-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    MagAppRoutingModule
  ],
  declarations: [MainComponent]
})
export class MagAppModule { }
