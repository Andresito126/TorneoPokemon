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

  
  createTrainer(trainer: Trainer): Observable<Trainer> {
    return this._http.post<Trainer>(`${this._apiUrl}/addTrainer`, trainer);
  }
  
  getAllTrainers(): Observable<Trainer[]> {
    return this._http.get<Trainer[]>(`${this._apiUrl}/getTrainers`); 
  }

  getTrainerById(id: number): Observable<Trainer> {
    return this._http.get<Trainer>(`${this._apiUrl}/getTrainer/${id}`);
  } 

  updateTrainer(trainer: Trainer): Observable<Trainer> {
    return this._http.put<Trainer>(`${this._apiUrl}/updateTrainer/${trainer.id_trainer}`, trainer);
}

  deleteTrainer(id: number): Observable<void> {
    return this._http.delete<void>(`${this._apiUrl}/deleteTrainer/${id}`);
  }



}
