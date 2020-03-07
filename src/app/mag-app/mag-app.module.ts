import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";

import { MagAppRoutingModule } from "./mag-app-routing.module";
import { MainComponent } from "./main/main.component";
import { HomeComponent } from "./home/home.component";
import { CareerComponent } from "./components/content/career/career.component";
import { AboutMeComponent } from "./components/content/about-me/about-me.component";
import { AppContentComponent } from "./app-content/app-content.component";
import { NavBarHeadImageComponent } from "./components/nav-bar-head-image/nav-bar-head-image.component";
import { NavBarNameplateComponent } from "./components/nav-bar-nameplate/nav-bar-nameplate.component";
import { NavBarNavComponent } from "./components/nav-bar-nav/nav-bar-nav.component";
import { NavBarContentComponent } from "./components/nav-bar-content/nav-bar-content.component";
import { ContactComponent } from "./components/content/contact/contact.component";
import { ResumeWorkHistoryEntryComponent } from './components/content/career/resume-work-history-entry/resume-work-history-entry.component';
import { SocialMediaIconsComponent } from './components/social-media-icons/social-media-icons.component';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MagAppRoutingModule],
  declarations: [
    MainComponent,
    HomeComponent,
    CareerComponent,
    AboutMeComponent,
    AppContentComponent,
    NavBarHeadImageComponent,
    NavBarNameplateComponent,
    NavBarNavComponent,
    NavBarContentComponent,
    ContactComponent,
    ResumeWorkHistoryEntryComponent,
    SocialMediaIconsComponent
  ]
})
export class MagAppModule {}
