import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LanguageComponent } from "./language.component";
import { HttpClientModule } from "@angular/common/http";

describe("LanguageComponent", () => {
  let component: LanguageComponent;
  let fixture: ComponentFixture<LanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageComponent],
      imports: [HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should have h4 tage with Language title", () => {
    let title = fixture.debugElement.nativeElement.querySelector("h4");
    expect(title).toBeDefined();
    expect(title.textContent).toBe("Language List");
  });

  it("should have Language table", () => {
    let table = fixture.debugElement.nativeElement.querySelector("table");
    expect(table).toBeDefined();
    expect(table.rows[0].childNodes[0].textContent).toBe("#");
    expect(table.rows[0].childNodes[1].textContent).toBe("Name");
    expect(table.rows[0].childNodes[2].textContent).toBe("Native Name");
  });
});
