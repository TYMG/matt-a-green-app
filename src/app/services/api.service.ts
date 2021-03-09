import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { SneakPeekerEmailDto } from "../models/sneakpeeker-email-dto.model";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Headers": "Content-Type"
    })
  };

  constructor(private http: HttpClient) {}

  generateSPEmail(sneakPeekerEmailDto: SneakPeekerEmailDto) {
    return this.http.post(
      environment.apiUrl + "/sendMail",
      sneakPeekerEmailDto
    );
  }
}
