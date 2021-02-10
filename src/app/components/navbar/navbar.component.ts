import { Component, OnInit } from "@angular/core";

@Component({
  selector: "mag-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  isOpen = false;

  constructor() {}

  ngOnInit(): void {}
}
