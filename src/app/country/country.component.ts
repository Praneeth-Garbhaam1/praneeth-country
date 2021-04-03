import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countrynames: object;
  searchvalue: string;
  getStates: any;
  iso3:any;
  statename:any;
  image: string;
  constructor(private dataservice:DataService,private route:Router) { }

  ngOnInit(): void {
    this.getCountries();
  }
  getCountries(){
    this.dataservice.getCountries().subscribe((res:any)=>{
      this.countrynames = res.countries;
    })
  }
  retrievestates(){
    this.dataservice.getCountries().subscribe((res:any)=>{
      this.countrynames = res.countries;
    })
  }
  search(event){
   
    this.searchvalue = event.target.value.toUpperCase();
    console.log(this.searchvalue);
    const request = {
      "country":this.searchvalue,
    }
    this.dataservice.getStates(request).subscribe((res:any)=>{
      this.iso3 = res.data.iso3;
      this.statename = res.data.name;
      this.getStates = res.data;
      console.log('response of states',this.getStates);
      
    });
    this.dataservice.getStateImages(request).subscribe((res:any)=>
    {
      this.image = res.data.flag;
    })
  }

  retrieveCities(data){
    const obj = {
      "country":this.statename,
      "state":data
    }
    this.route.navigate(['/city'],{ queryParams: obj });
    console.log(obj);
  }
}
