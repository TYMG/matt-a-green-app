import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SneakPeekerEmailDto } from "../models/sneakpeeker-email-dto.model";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  generateSPEmail(sneakPeekerEmailDto: SneakPeekerEmailDto) {
    return this.http.post("sendMail", sneakPeekerEmailDto);
  }
}
