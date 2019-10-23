# CountryDetails

This project was generated with [Angular CLI] version 7.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Basic test cases for all the components are written.
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Application Flow

1. Home - Country details component loaded initially along with app component as Home page.
2. Both language and currency component are lazy loaded.
3. When application started one service call is called which brings all the countries from given URL and load data in Country Dropdown.
4. When country is selected from dropdown, service call is called and get country details according to its alpha3code.
5. Selected country details loaded into Home - Country details Table.
6. If user route from Home to language or currency detail page, the selected country details will be available in that respective page details table.
7. User can change Selected country from any page (Component) and newly selected country details will be available in all the pages (Component).


## Assumptions

1. User don't need to select country on every page (Component).
2. Once country is selected their details will be available on all of the pages (Component).
3. Side bar panel menu is not implemented using given bootstrap 4 demo UI as it is taking more time to load and will take much time for modification to make changes as needed.
4. If user select "Select a country" (default) option from dropdown, blank values are loaded in all the components.



