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
    },
    {
      title: "Full Stack Developer",
      dates: "Nov 2014 - Dec 2017",
      blurb:
        "Working on a legacy Spring MVC application, fixing bugs and production issues alike, and designing and developing new functionality.",
      company: "Accenture Federal Services",
      location: null,
      tasks: [
        "Contributed to MongoDB Document Storage functionality using REST Webservices and two way SSL authentication",
        "Eliminated more than 5 legacy COBOL services by replacing them with SOAP Services",
        "Improved XSL based Legal PDF Document generator; Built replacement that creates 508 compliant pdfs, using Mustache and PDFReactor. Will speed up development and testing time in the future by cutting out unnecessary steps in the process."
      ]
    },
    {
      title: "Jr. Full Stack Developer",
      dates: "May 2012-Nov 2014",
      blurb:
        "Primarily a back-end developer on a small agile project where I was focused on developing SOAP and REST based services in addition to product improvements.",
      company: "Sapient Government Services",
      location: null,
      tasks: [
        "Built Front-End Functionality using Struts and Spring",
        "Delivered a User File Downloader Java Application with a Swing GUI",
        "Produced UML diagrams of the system; including Use Cases and Entity models",
        "Assisted with SQL Database administration in non-production environments."
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
