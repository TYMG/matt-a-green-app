import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { FakeBackendInterceptor } from './helpers/fake-backend';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { AuthGuard } from './guards/auth.guard';

export const COMPONENTS = [
  HeaderComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    COMPONENTS
  ],
  declarations: [COMPONENTS]
})
export class CoreModule {

}
