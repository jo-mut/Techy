import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../classes/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private url: string = 'assets/data/projects.json';

  constructor(private http: HttpClient) { 
    this.getProjects();
  }

  public getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.url);
  }
}
