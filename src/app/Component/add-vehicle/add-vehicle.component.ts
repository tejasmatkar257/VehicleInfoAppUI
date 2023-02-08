import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/models/Vehicle.model';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  addVehicleRequest: Vehicle = {
    id: 0,
    statePassing: '',
    regionalCode: '',
    alphabets: '',
    vehicleNumber: '',
    userState:'',
    owner: ''
    };
  constructor(private vehicleService: VehiclesService , private router: Router) { }

  ngOnInit(): void {
  }

  addVehicle()
    {
      this.vehicleService.AddVehicle(this.addVehicleRequest)
      .subscribe({
        next: (Vehicle) => {
          console.log(Vehicle);
          this.router.navigate(['vehicles']);
        }
        // this.router.navigate(['employees']);
      });
    }

}
