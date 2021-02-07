import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "mag-resume-work-history-entry",
  templateUrl: "./resume-work-history-entry.component.html",
  styleUrls: ["./resume-work-history-entry.component.css"]
})
export class ResumeWorkHistoryEntryComponent implements OnInit {
  @Input() title: string;
  @Input() dates: string;
  @Input() blurb: string;
  @Input() company: string;
  @Input() location: string;
  @Input() tasks: string[];

  constructor() {}

  ngOnInit() {}
}
