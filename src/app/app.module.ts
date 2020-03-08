import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UnderTheHoodComponent } from './under-the-hood/under-the-hood.component';
import { SidePanelModule } from './side-panel/side-panel.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UnderTheHoodComponent,
    NavbarComponent,
    HowItWorksComponent
  ],
  imports: [
    SidePanelModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 