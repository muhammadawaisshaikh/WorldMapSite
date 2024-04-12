import { Injectable } from '@angular/core';
import { Geonames, Country } from './geonames';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

   
   public static returned: Geonames = []

   public static mycountry: string = ""

   public static mycountrycode: string = ""


  constructor(public http: HttpClient) {
     this.setCountryCode("CA")
   }

   setCountryCode(countrycode: string){

      APIService.mycountrycode = countrycode;
   }

async callApi() {

  const url = `http://api.geonames.org/countryInfoJSON?&country=${APIService.mycountrycode}&username=kirbyniko`  

  return this.http.get(url)

  }


  getGeonames() : Geonames {
    this.callApi().then(
      (data:(any)) => {
        console.log(data)
        data.subscribe((res: any) => {
          APIService.returned = res.geonames[0];
        
        })
        
     //   this.country = data[0].capital
      }

    );
    return(APIService.returned)
  }

  getCountry(): string{
    this.callApi().then((response: any) =>
      {
        APIService.returned = response;
      }
  );
  return APIService.returned[0].capital
  }
}
