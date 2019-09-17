import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../classes/project.model';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  private projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();
  }

  private getProjects() {
    this.projectService.getProjects().subscribe( data => {
      this.projects = data;
      console.log(this.projects)
    })
  }
}
