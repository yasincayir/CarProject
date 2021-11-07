import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId",pathMatch:"full",component:CarComponent},
  {path:"cars/color/:colorId",pathMatch:"full",component:CarComponent},
  {path:"cars/brand:brandId/color:colorId",pathMatch:"full",component:CarComponent},
  {path:"cars/:id",pathMatch:"full",component:CarDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
