import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "mag-sneakpeeker",
  templateUrl: "./sneakpeeker.component.html",
  styleUrls: ["./sneakpeeker.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class SneakpeekerComponent implements OnInit {
  SP_FG: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    keywords: new FormControl("", [Validators.required]),
    min_price: new FormControl("", [Validators.required]),
    max_price: new FormControl("", [Validators.required])
  });

  constructor() {}

  ngOnInit(): void {}
}
