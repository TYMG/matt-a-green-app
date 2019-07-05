import { Component, OnInit } from "@angular/core";

import {
  animate,
  query,
  style,
  transition,
  trigger,
  stagger,
  sequence
} from "@angular/animations";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  animations: [
    trigger("fadeInAnimation", [
      transition(":enter", [
        style({
          transform: "translateY(-10%)",
          opacity: 0,
          position: "static"
        }),
        animate(
          "1.5s ease-in-out",
          style({ transform: "translateY(0%)", opacity: 1 })
        )
      ])
    ]),
    trigger("fadeUpInAnimation", [
      transition(":enter", [
        style({
          transform: "translateY(20%)",
          opacity: 0,
          position: "static"
        }),
        animate(
          "1.5s ease-in-out",
          style({ transform: "translateY(0%)", opacity: 1 })
        )
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
