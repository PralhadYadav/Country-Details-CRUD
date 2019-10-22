import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { throwError, Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CountryDetailsService {
  countryUrl = "https://restcountries.eu/rest/v2";
  selectedCountryDetails = new BehaviorSubject<any>({});
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.message);
    } else {
      console.error(`Backend returned code ${error.status}`);
    }
    return throwError("Something bad happened; please try again later.");
  }

  public getCountryDetails(alpha3Code): Observable<any> {
    return this.http.get(`${this.countryUrl}/alpha/${alpha3Code}`).pipe(
      map(res => res),
      catchError(this.handleError)
    );
  }

  public getAllCountries(): Observable<any> {
    return this.http.get(`${this.countryUrl}/all`).pipe(
      map(res => res),
      catchError(this.handleError)
    );
  }
}
