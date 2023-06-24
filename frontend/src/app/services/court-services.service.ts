import { Injectable } from '@angular/core';
import { Court } from '../models/Court';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourtServicesService {
  constructor(private http: HttpClient) {}

  backend = 'http://localhost:5005';

  getAllCourts() {
    return firstValueFrom(this.http.get(`${this.backend}/courts/getAll`));
  }
}
