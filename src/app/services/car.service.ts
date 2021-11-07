import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44345/api/"

  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl +"cars/getcardetails";
   return this.httpClient.get<ListResponseModel<Car>>(newPath);
 }

 getCarByBrandId(brandId:number):Observable<ListResponseModel<Car>>{
  let newPath=this.apiUrl + "cars/getbybrand?brandId="+brandId;
  return this.httpClient.get<ListResponseModel<Car>>(newPath);
}

getCarByColorId(colorId:number):Observable<ListResponseModel<Car>>{
  let newPath=this.apiUrl + "cars/getbycolor?colorId="+colorId;
  return this.httpClient.get<ListResponseModel<Car>>(newPath);
}

getCarByBrandAndColor(brandId:number,colorId:number):Observable<ListResponseModel<Car>>{
  let newPath=this.apiUrl + "cars/getbyfilter?brandId="+brandId +"&colorId="+colorId;
  return this.httpClient.get<ListResponseModel<Car>>(newPath);
}

}
