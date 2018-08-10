import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";

import { MagAppRoutingModule } from "./mag-app-routing.module";
import { MainComponent } from "./main/main.component";
import { HomeComponent } from "./home/home.component";
import { CareerComponent } from "./career/career.component";
import { ProjectsComponent } from "./projects/projects.component";
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MagAppRoutingModule],
  declarations: [
    MainComponent,
    HomeComponent,
    CareerComponent,
    ProjectsComponent,
    AboutMeComponent
  ]
})
export class MagAppModule {}
