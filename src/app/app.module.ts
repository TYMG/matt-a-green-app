import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { OverlayModule } from "@angular/cdk/overlay";

import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";

import { HowItWorksComponent } from "./how-it-works/how-it-works.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HowItWorksComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    OverlayModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
