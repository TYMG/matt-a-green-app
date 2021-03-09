import {
  BrowserModule,
  HammerGestureConfig,
  HammerModule,
  HAMMER_GESTURE_CONFIG
} from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
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
import { SneakpeekerComponent } from "./sneakpeeker/sneakpeeker.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSliderModule } from "@angular/material/slider";
import { MaterialModule } from "./material.module";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HowItWorksComponent,
    NavbarComponent,
    SneakpeekerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    OverlayModule,
    MaterialModule,
    MatFormFieldModule,
    HammerModule
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
