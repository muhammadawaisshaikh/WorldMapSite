import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Geonames } from './geonames';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private mycountrycode: string = "CA";

  constructor(private http: HttpClient) {
  }

  setCountryCode(countrycode: string): void {
    this.mycountrycode = countrycode;
  }

  callApi(): Observable<any> {
    const url = `http://api.geonames.org/countryInfoJSON?&country=${this.mycountrycode}&username=kirbyniko`;
    return this.http.get(url);
  }

  getGeonames(): Observable<Geonames> {
    return this.callApi().pipe(map((res: any) => res.geonames[0]));
  }

  getCountry(): Observable<string> {
    return this.callApi().pipe(map((res: any) => res.geonames[0]));
  }
}
