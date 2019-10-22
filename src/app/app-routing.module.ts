import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    component: CountryComponent
  },
  {
    path: "language",
    pathMatch: "full",
    loadChildren: () =>
      import("./language/language.module").then(
        m => m.LanguageModule
      ) 
  },
  {
    path: "currency",
    loadChildren: () =>
      import("./currency/currency.module").then(
        m => m.CurrencyModule
      ) 
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
