import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromUser from './reducers/user.reducer';

import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    StoreModule.forFeature('user', fromUser.reducer),
  ],
  declarations: [UserProfileComponent]
})
export class UserModule { }
