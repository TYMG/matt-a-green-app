import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ScrollSpyService } from "../../scroll-spy.service";

@Component({
  selector: "mag-navbar-nav",
  templateUrl: "./nav-bar-nav.component.html",
  styleUrls: ["./nav-bar-nav.component.scss"]
})
export class NavBarNavComponent implements OnInit {
  scrollSpyObserverable$: Observable<string>;

  currentSelection: string;
  constructor(scrollSpyService: ScrollSpyService) {
    scrollSpyService
      .getCurrentSelection()
      .subscribe(
        currentSelection => (this.currentSelection = currentSelection)
      );
  }

  ngOnInit() {}

  isSectionActive(section: string): boolean {
    return section === this.currentSelection ? true : false;
  }
}
