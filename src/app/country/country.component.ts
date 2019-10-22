import { Component, OnInit } from "@angular/core";
import { CountryDetailsService } from "../services/country-details.service";

@Component({
  selector: "app-country",
  templateUrl: "./country.component.html",
  styleUrls: ["./country.component.css"]
})
export class CountryComponent implements OnInit {
  countryDetails: any;
  constructor(private countrySrc: CountryDetailsService) {}

  ngOnInit() {
    this.countrySrc.selectedCountryDetails.subscribe(data => {
      this.countryDetails = data;
    });
  }
}
