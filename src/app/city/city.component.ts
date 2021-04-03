import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  order: any;
  citienames: any;
  msg:string;
  countryname:string;
  statename:string;
  constructor(private route: ActivatedRoute,private dataservice:DataService) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      console.log(params); // { order: "popular" }

      this.order = params;
     this.countryname = params.country;
     this.statename = params.state;
    }
  );
  this.getCitiesFrompreviouscomp();
  }

  getCitiesFrompreviouscomp(){
    this.dataservice.getCities(this.order).subscribe((res:any)=>{
      this.citienames = res.data;

      this.msg = res.msg;

      console.log(this.citienames)
    })
  }

}
