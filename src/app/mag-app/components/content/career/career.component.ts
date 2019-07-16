import { Component, OnInit } from "@angular/core";
import { Position } from "./index";

@Component({
  selector: "mag-career",
  templateUrl: "./career.component.html",
  styleUrls: ["./career.component.scss"]
})
export class CareerComponent implements OnInit {
  jerbs: Position[] = [
    {
      title: "Software Engineer",
      dates: "Jan 2018-Present",
      blurb: "Lead Developer on the AMCAS For School Application",
      company: "Association of American Medical College",
      location: null,
      tasks: [
        "Led the implementation of an Angular Project using HighCharts and Angular Material",
        "Added Google Analytics Code to two AAMC apps",
        "Maintained and Added functionality to Backend Services"
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
