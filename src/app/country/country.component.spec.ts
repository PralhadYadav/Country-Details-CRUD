import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CountryComponent } from "./country.component";
import { HttpClientModule } from "@angular/common/http";

describe("CountryComponent", () => {
  let component: CountryComponent;
  let fixture: ComponentFixture<CountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountryComponent],
      imports: [HttpClientModule],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should have h4 tage with home title", () => {
    let title = fixture.debugElement.nativeElement.querySelector("h4");
    expect(title).toBeDefined();
    expect(title.textContent).toBe("Home - Country Details");
  });

  it("should have country details table", () => {
    let table = fixture.debugElement.nativeElement.querySelector("table");
    expect(table).toBeDefined();
    expect(table.rows[0].textContent).toBe("Country Name");
    expect(table.rows[1].textContent).toBe("Capital");
    expect(table.rows[2].textContent).toBe("Region");
    expect(table.rows[3].textContent).toBe("Sub region");
    expect(table.rows[4].textContent).toBe("Population");
    expect(table.rows[5].textContent).toBe("Area");
    expect(table.rows[6].textContent).toBe("alpha3Code");
  });
});
