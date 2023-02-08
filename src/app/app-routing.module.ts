import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVehicleComponent } from './Component/add-vehicle/add-vehicle.component';
import { VehicleComponent } from './Component/vehicle/vehicle.component';
import { HomeComponent } from './Component/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'vehicles',
    component: VehicleComponent
  },
  {
    path: 'addvehicle',
    component: AddVehicleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
