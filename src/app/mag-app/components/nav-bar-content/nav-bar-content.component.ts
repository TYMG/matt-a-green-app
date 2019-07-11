import { Component, OnInit, Output } from "@angular/core";
import { EventEmitter } from "protractor";

@Component({
  selector: "mag-nav-bar-content",
  templateUrl: "./nav-bar-content.component.html",
  styleUrls: ["./nav-bar-content.component.scss"]
})
export class NavBarContentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  currentSection = "section1";

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
    console.log(sectionId);
  }

  scrollTo(section) {
    document.querySelector("#" + section).scrollIntoView();
  }
}
