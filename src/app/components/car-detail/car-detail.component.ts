import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { Rental } from 'src/app/models/rental';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  cars:Car[]=[];
  constructor(private cardetailService:CarDetailService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.getCarsById(params["id"]);
    })
  }

  getCarsById(carId:number){
    this.cardetailService.getCarsById(carId).subscribe((response)=>{
      this.cars=response.data
    })

  }

}
