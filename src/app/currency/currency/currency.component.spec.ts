import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CurrencyComponent } from "./currency.component";
import { HttpClientModule } from "@angular/common/http";

describe("CurrencyComponent", () => {
  let component: CurrencyComponent;
  let fixture: ComponentFixture<CurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyComponent],
      imports: [HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should have h4 tage with Currency title", () => {
    let title = fixture.debugElement.nativeElement.querySelector("h4");
    expect(title).toBeDefined();
    expect(title.textContent).toBe("Currency List");
  });

  it("should have Currency details table", () => {
    let table = fixture.debugElement.nativeElement.querySelector("table");
    expect(table).toBeDefined();
    expect(table.rows[0].childNodes[0].textContent).toBe("#");
    expect(table.rows[0].childNodes[1].textContent).toBe("Name");
    expect(table.rows[0].childNodes[2].textContent).toBe("Code");
    expect(table.rows[0].childNodes[3].textContent).toBe("Symbol");
  });
});
