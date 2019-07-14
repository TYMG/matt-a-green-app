import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ScrollSpyService {
  private _currentSectionSubject = new Subject<string>();

  constructor() {}

  updateCurrentSectionSubject(updateVal: string): void {
    if (updateVal) {
      this._currentSectionSubject.next(updateVal);
    }
  }

  getCurrentSelection(): Observable<string> {
    return this._currentSectionSubject.asObservable();
  }
}
