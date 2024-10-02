import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trainer } from '../models/trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private _apiUrl = 'http://localhost:3000/trainer';

  constructor(private _http: HttpClient) { }

  getAllTrainers(): Observable<Trainer[]> {
    return this._http.get<Trainer[]>(`${this._apiUrl}/getTrainers`); 
}

  createTrainer(trainer: Trainer): Observable<Trainer> {
    return this._http.post<Trainer>(`${this._apiUrl}/addTrainer`, trainer);
  }

  getTrainerById(id: number): Observable<Trainer> {
    return this._http.get<Trainer>(`${this._apiUrl}/getTrainer/${id}`);
  } 

}
