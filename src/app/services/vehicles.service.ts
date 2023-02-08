import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehicle } from '../models/Vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  baseApiUrl: string = 'https://localhost:7081';

  constructor(private http: HttpClient) { }

  GetAllVehicle(): Observable<Vehicle[]>{
    return this.http.get<Vehicle[]>(this.baseApiUrl + '/api/Vehicle/GetAllVehicle');
  }

  AddVehicle(addVehicleRequest:Vehicle): Observable<Vehicle>{
    return this.http.post<Vehicle>(this.baseApiUrl + '/api/Vehicle/SaveVehicle',addVehicleRequest);
  }


}
