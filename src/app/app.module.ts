import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CountryComponent } from "./country/country.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, CountryComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
