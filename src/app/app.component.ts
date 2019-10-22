import { Component } from "@angular/core";
import { CountryDetailsService } from "./services/country-details.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  countries: any;
  constructor(private countrySrc: CountryDetailsService) {}

  ngOnInit(): void {
    this.countrySrc.getAllCountries().subscribe(data => {
      this.countries = data;
    });
  }

  selectedCountry(event) {
    if (event === "selected") {
      this.countrySrc.selectedCountryDetails.next({});
    } else {
      this.countrySrc.getCountryDetails(event).subscribe(data => {
        this.countrySrc.selectedCountryDetails.next(data);
      });
    }
  }
}
