import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './city/city.component';
import { CountryComponent } from './country/country.component';


const routes: Routes = [
  {
    path:'',
    component:CountryComponent
  },
  {
    path:'city',
    component:CityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
