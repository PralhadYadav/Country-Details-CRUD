import { Component, OnInit } from "@angular/core";
import { CountryDetailsService } from "src/app/services/country-details.service";

@Component({
  selector: "app-language",
  templateUrl: "./language.component.html",
  styleUrls: ["./language.component.css"]
})
export class LanguageComponent implements OnInit {
  countryDetails: any;
  constructor(private countrySrc: CountryDetailsService) {}

  ngOnInit() {
    this.countrySrc.selectedCountryDetails.subscribe(data => {
      this.countryDetails = data.languages;
    });
  }
}
