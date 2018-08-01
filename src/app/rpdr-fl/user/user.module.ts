import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromUser from './reducers/user.reducer';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
        StoreModule.forFeature('user', fromUser.reducer),
  ],
  declarations: []
})
export class UserModule { }
