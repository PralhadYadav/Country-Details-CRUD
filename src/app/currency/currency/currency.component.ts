import { Component, OnInit } from "@angular/core";
import { CountryDetailsService } from "src/app/services/country-details.service";

@Component({
  selector: "app-currency",
  templateUrl: "./currency.component.html",
  styleUrls: ["./currency.component.css"]
})
export class CurrencyComponent implements OnInit {
  countryDetails: any;
  constructor(private countrySrc: CountryDetailsService) {}

  ngOnInit() {
    this.countrySrc.selectedCountryDetails.subscribe(data => {
      this.countryDetails = data.currencies;
    });
  }
}
