import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/Vehicle.model';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicles: Vehicle[] = [];

  constructor(private vehiclesService: VehiclesService) { }

  ngOnInit(): void {
    this.vehiclesService.GetAllVehicle().subscribe(data=>{
      this.vehicles=data;
      console.log(this.vehicles)
    });
  }

}
