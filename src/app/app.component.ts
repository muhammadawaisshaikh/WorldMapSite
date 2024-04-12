import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountryInfoComponent } from "./country-info/country-info.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CountryInfoComponent]
})
export class AppComponent {
  title = 'WorldMapSite';
}
