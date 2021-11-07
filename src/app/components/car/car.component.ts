import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[]=[];
  dataLoaded=false;
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.RunMethodByActivatedRoute();
  }


   //add activated method for ngOnInit().
   RunMethodByActivatedRoute(){
    this.activatedRoute.params.subscribe((params)=>{
      if (params["brandId"] && params["colorId"]) {
        this.getCarByBrandAndColor(params["brandId"],params["colorId"])
      }else if (params["colorId"]) {
        this.getCarByColorId(params["colorId"])
      }else if (params["brandId"]) {
        this.getCarByBrandId(params["brandId"])
      }else{
        this.getCarDetails()
      }
    });
  }

  getCarDetails(){
     this.carService.getCarDetails().subscribe((response)=>{
       this.cars=response.data
       this.dataLoaded=true;
     });
  }

  getCarByBrandId(brandId:number){
    this.carService.getCarByBrandId(brandId).subscribe((response)=>{
      this.cars=response.data
      this.dataLoaded=true;

    })
  }

  getCarByColorId(colorId:number){
    this.carService.getCarByColorId(colorId).subscribe((response)=>{
      this.cars=response.data
      this.dataLoaded=true;

    })
  }

  getCarByBrandAndColor(brandId:number,colorId:number){
    this.carService.getCarByBrandAndColor(brandId,colorId).subscribe((response)=>{
      this.cars=response.data
      this.dataLoaded=true;
    })

  }


  
 

}
