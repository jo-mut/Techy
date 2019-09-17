import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Worker } from '../classes/worker.model';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  private url: string = 'assets/data/workers.json';

  constructor(private http: HttpClient) { 
    this.getWorkers();
  }

  public getWorkers(): Observable<Worker[]> {
    return this.http.get<Worker[]>(this.url);
  }
}
