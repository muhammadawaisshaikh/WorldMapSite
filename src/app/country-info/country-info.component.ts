import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { SharedService } from '../services/shared/shared.service';

@Component({
  selector: 'app-country-info',
  standalone: true,
  imports: [],
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})
export class CountryInfoComponent implements OnInit {
  geoname: any | undefined;

  constructor(
    public service: APIService,
    private sharedSrv: SharedService
  ) {}

  ngOnInit(): void {
    this.startListenShared();
    this.getCountryInfo();
  }

  startListenShared() {
    this.sharedSrv.selectMapItemFlag.subscribe((res: boolean) => {
      if (res == true) {
        this.getCountryInfo();
        this.sharedSrv.setMapItemFlag(false);
      }
    })
  }

  getCountryInfo() {
    this.service.getCountry().subscribe(res => {
      this.geoname = res;
      console.log(res, this.geoname);
    });
  }
}
