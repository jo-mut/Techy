import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../classes/activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private url = 'assets/data/activities.json';

  constructor(private http: HttpClient) {
    this.getActivities();
  }

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.url);
  }
}
