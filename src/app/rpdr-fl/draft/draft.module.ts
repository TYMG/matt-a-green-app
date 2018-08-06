import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DraftRoutingModule } from './draft-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromDraft from './reducers/draft.reducer';

import { DraftCenterComponent } from './components/draft-center/draft-center.component';



@NgModule({
  imports: [
    CommonModule,
    DraftRoutingModule,
    StoreModule.forFeature('draft', fromDraft.reducer),
  ],
  declarations: [DraftCenterComponent]
})
export class DraftModule { }
