import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Camera } from '../classes/camera.model';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  private url: string = 'assets/data/cameras.json';

  constructor(private http: HttpClient) { 
    this.getCameras();
  }

  public getCameras(): Observable<Camera[]> {
    return this.http.get<Camera[]>(this.url);
  }
}
