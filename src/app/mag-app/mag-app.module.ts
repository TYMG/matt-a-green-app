import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";

import { MagAppRoutingModule } from "./mag-app-routing.module";
import { MainComponent } from "./main/main.component";
import { HomeComponent } from "./home/home.component";
import { CareerComponent } from "./career/career.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { AppContentComponent } from "./app-content/app-content.component";
import { NavBarHeadImageComponent } from './components/nav-bar-head-image/nav-bar-head-image.component';
import { NavBarHeadNameplateComponent } from './components/nav-bar-head-nameplate/nav-bar-head-nameplate.component';
import { NavBarNameplateComponent } from './components/nav-bar-nameplate/nav-bar-nameplate.component';
import { NavBarNavComponent } from './components/nav-bar-nav/nav-bar-nav.component';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MagAppRoutingModule],
  declarations: [
    MainComponent,
    HomeComponent,
    CareerComponent,

    AboutMeComponent,
    AppContentComponent,
    NavBarHeadImageComponent,
    NavBarHeadNameplateComponent,
    NavBarNameplateComponent,
    NavBarNavComponent
  ]
})
export class MagAppModule {}
