import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "mag-navbar-nav",
  templateUrl: "./nav-bar-nav.component.html",
  styleUrls: ["./nav-bar-nav.component.scss"]
})
export class NavBarNavComponent implements OnInit {
  scrollSpyObserverable$: Observable<string>;

  currentSelection: string;
  constructor() {
   
  }

  ngOnInit() {}

  isSectionActive(section: string): boolean {
    return section === this.currentSelection ? true : false;
  }
}
