import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EffectsModule } from '@ngrx/effects';

import { RpdrFLRoutingModule } from './rpdr-fl-routing.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app/app.component';
import { PageNotFoundComponent } from './core/containers/page-not-found/page-not-found.component'
import { LoginComponent } from './auth/components/login/login.component';

import { reducers, metaReducers } from './reducers';
import { environment } from '../../environments/environment';
import { AppEffects } from './app.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    NgbModule,
    EffectsModule.forRoot([AppEffects]),
    CoreModule,
    RpdrFLRoutingModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [AppComponent]
})
export class RpdrFlModule { }
