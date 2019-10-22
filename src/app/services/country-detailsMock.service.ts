import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CountryDetailsServiceMock {
  countryUrl = "https://restcountries.eu/rest/v2";
  selectedCountryDetails = new BehaviorSubject<any>({});
  constructor() {}

  public getCountryDetails(alpha3Code): Observable<any> {
    return of({
      name: "Afghanistan",
      topLevelDomain: [".af"],
      alpha2Code: "AF",
      alpha3Code: "AFG",
      callingCodes: ["93"],
      capital: "Kabul",
      altSpellings: ["AF", "Afġānistān"],
      region: "Asia",
      subregion: "Southern Asia",
      population: 27657145,
      latlng: [33.0, 65.0],
      demonym: "Afghan",
      area: 652230.0,
      gini: 27.8,
      timezones: ["UTC+04:30"],
      borders: ["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"],
      nativeName: "افغانستان",
      numericCode: "004",
      currencies: [{ code: "AFN", name: "Afghan afghani", symbol: "؋" }],
      languages: [
        { iso639_1: "ps", iso639_2: "pus", name: "Pashto", nativeName: "پښتو" },
        {
          iso639_1: "uz",
          iso639_2: "uzb",
          name: "Uzbek",
          nativeName: "Oʻzbek"
        },
        {
          iso639_1: "tk",
          iso639_2: "tuk",
          name: "Turkmen",
          nativeName: "Türkmen"
        }
      ]
    });
  }

  public getAllCountries(): Observable<any> {
    return of([
      {
        name: "Afghanistan",
        topLevelDomain: [".af"],
        alpha2Code: "AF",
        alpha3Code: "AFG"
      },
      {
        name: "Åland Islands",
        topLevelDomain: [".ax"],
        alpha2Code: "AX",
        alpha3Code: "ALA"
      }
    ]);
  }
}
