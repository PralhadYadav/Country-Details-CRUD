import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { By } from "@angular/platform-browser";
import { CountryDetailsService } from "./services/country-details.service";
import { CountryDetailsServiceMock } from "./services/country-detailsMock.service";

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [AppComponent],
      providers: [
        { provide: CountryDetailsService, useClass: CountryDetailsServiceMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should render sidebar list", () => {
    const navbar = fixture.debugElement.query(By.css(".list-unstyled"));
    expect(navbar).toBeDefined();
  });

  it("should render sidebar list with links", () => {
    const navMenu = fixture.debugElement.queryAll(By.css(".nav-link"));
    expect(navMenu[0].nativeNode.textContent).toBe("Home");
    expect(navMenu[1].nativeNode.textContent).toBe("Language List");
    expect(navMenu[2].nativeNode.textContent).toBe("Currency List");
  });

  it("Should render Country list dropdown", () => {
    const dropdown = fixture.debugElement.query(By.css(".sidebarSpace"));
    expect(dropdown).toBeDefined();
  });

  it("Should load countries in the dropdown", () => {
    expect(component.countries.length).toBeGreaterThanOrEqual(2);
    expect(component.countries[0].name).toBe("Afghanistan");
  });
});
