import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-country-info',
  standalone: true,
  imports: [],
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})
export class CountryInfoComponent implements OnInit {
  geonames: string | undefined;

  constructor(public service: APIService) {}

  ngOnInit(): void {
    this.service.getCountry().subscribe(res => {
      this.geonames = res;
      console.log(res, this.geonames);
    });
  }
}
