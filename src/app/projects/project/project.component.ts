import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../classes/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() project: Project;
  private description: string;
  private lorem: string = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
  Reiciendis laborum sequi dolor corrupti? Ullam praesentium sunt inventore 
  dignissimos consectetur accusamus laborum ipsum in cupiditate iure. 
  Nobis assumenda est quas dolor.`

  constructor() { }

  ngOnInit() {
    this.projectInfo();
  }

  projectInfo() {
    this.description = this.lorem;
  }

}
