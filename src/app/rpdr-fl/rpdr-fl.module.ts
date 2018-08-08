import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { fakeBackendProvider } from './core/helpers/fake-backend';
import { JwtInterceptor } from './core/helpers/jwt.interceptor';
import { ErrorInterceptor } from './core/helpers/error.interceptor';
import { RegisterComponent } from './auth/components/register/register.component';



@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    NgbModule,
    EffectsModule.forRoot([AppEffects]),
    CoreModule,
    RpdrFLRoutingModule,
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    fakeBackendProvider
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegisterComponent,
  ],
  bootstrap: [AppComponent]
})
export class RpdrFlModule { }
