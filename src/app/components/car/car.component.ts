import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[]=[];
  brands:Brand[]=[];
  colors:Color[]=[];
  dataLoaded=false;
  filterText="";
  filterBrandText:number=0;
  filterColorText:number=0;

  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private colorService:ColorService,
    private brandService:BrandService,
    private toastrService:ToastrService,
    private cartService:CartService,
    ) { }

  ngOnInit(): void {
    this.RunMethodByActivatedRoute();
    this.getAllColors();
    this.getAllBrands();
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

  getAllColors(){
     this.colorService.getAllColors().subscribe((response)=>{
       this.colors=response.data
     })
  }

  getAllBrands(){
    this.brandService.getBrands().subscribe((response)=>{
      this.brands=response.data
    })
 }

 getSelectedBrand(brandId: number) {
  if (this.filterBrandText == brandId){
      return true;
  }else{
    return false;
  }
  
}

 getSelectedColor(colorId: number) {
  if (this.filterColorText == colorId){
      return true;
  }else{
    return false;
  }
  
}

addToCart(car:Car){
   this.toastrService.success("Ekleme Gerçekleşti",car.brandName)
   this.cartService.addToCart(car);
}
  
}
