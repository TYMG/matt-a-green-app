import { animate, style, transition, trigger } from "@angular/animations";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "../services/api.service";
import { SneakPeekerEmailDto } from "../models/sneakpeeker-email-dto.model";
import { catchError, map, tap } from "rxjs/operators";
import { cpuUsage } from "process";
import { throwError } from "rxjs";

@Component({
  selector: "mag-sneakpeeker",
  templateUrl: "./sneakpeeker.component.html",
  styleUrls: ["./sneakpeeker.component.scss"],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger("inOutAnimation", [
      transition(":enter", [
        style({
          top: "100px",
          opacity: 0,
          color: "$sp-white: rgba(221, 221, 221, 0)"
        }),
        animate(
          "500ms ease-in",
          style({
            top: "20px",
            opacity: 1,
            color: "$sp-white: rgba(221, 221, 221, 1)"
          })
        )
      ]),
      transition(":leave", [
        style({ top: "20px", opacity: 1 }),
        animate("500ms ease-in", style({ top: "100px", opacity: 0 }))
      ])
    ])
  ]
})
export class SneakpeekerComponent implements OnInit {
  SP_FG: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    keywords: new FormControl("", []),
    min_price: new FormControl("", []),
    max_price: new FormControl("", [])
  });

  validForm: boolean;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.SP_FG.valueChanges.subscribe(_ => {
      this.validForm =
        this.keywords.value || this.max_price.value || this.min_price.value;
    });
  }

  submitForm(event) {
    console.log(event);
    let form = this.SP_FG.value;
    let spDto: SneakPeekerEmailDto = {
      email: form["email"],
      criteria: {
        keywords: form["keywords"].split(",").map(str => str.trim()),
        max_price: form["max_price"],
        min_price: form["min_price"]
      }
    };
    this.api
      .generateSPEmail(spDto)
      .pipe(
        tap(res => console.log(res)),
        catchError(err => {
          console.log("Error Thrown!!! : err");
          return throwError(err);
        })
      )
      .subscribe(
        res => {
          //Display Success Modal
          console.log(res);
        },
        err => {
          //Display Failure Modal
        }
      );
  }

  get email() {
    return this.SP_FG.get("email");
  }
  get keywords() {
    return this.SP_FG.get("keywords");
  }
  get min_price() {
    return this.SP_FG.get("min_price");
  }
  get max_price() {
    return this.SP_FG.get("max_price");
  }
}
