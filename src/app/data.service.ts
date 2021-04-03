import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'http://vocab.nic.in/rest.php/country/json';
  stateUrl = 'https://countriesnow.space/api/v0.1/countries';
  constructor(private http:HttpClient) { }

  getCountries(){
    return this.http.get(this.baseUrl)
  }
  getStates(data){
    return this.http.post(this.stateUrl+'/states',data)
  }
  getStateImages(data){
    return this.http.post(this.stateUrl+'/flag/images',data)
  }
  getCities(data){
    return this.http.post(this.stateUrl+'/state/cities',data)
  }
 
}
