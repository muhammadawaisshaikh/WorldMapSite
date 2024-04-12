import { Component, OnInit, inject } from '@angular/core';
import { APIService } from '../api.service';
import { Country, Geonames } from '../geonames';

@Component({
  selector: 'app-country-info',
  standalone: true,
  imports: [],
  templateUrl: './country-info.component.html',
  styleUrl: './country-info.component.css'
})

export class CountryInfoComponent {

  constructor(public service: APIService){

  }

  ngOnInit() {
    this.service.callApi().then(
      (data:(any)) => {
        console.log(data)
        data.subscribe((res: any) => {
          this.geonames = res.geonames[0].capital;
          console.log(res, this.geonames );
        })
     //   this.country = data[0].capital
      }
    );
  }
  
  getCountry(): string{
    this.service.callApi().then((response: any) =>
      {
        APIService.returned = response;
      }
  );
  return APIService.returned[0].capital
  }
 
   public country? : Country

   public geonames? : Geonames
 
 }
 