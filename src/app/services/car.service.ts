import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarResponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44345/api/cars/getcardetails"

  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<CarResponseModel>{
   return this.httpClient.get<CarResponseModel>(this.apiUrl);
 }
}
