import { Component, OnInit, Input } from '@angular/core';
import { Activity } from '../../classes/activity.model';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  @Input() activity: Activity;
  private time: string = '00:70:00';
  private description: string;
  private title: string;
  private lorem: string = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
  Reiciendis laborum sequi dolor corrupti? Ullam praesentium sunt inventore 
  dignissimos consectetur accusamus laborum ipsum in cupiditate iure. 
  Nobis assumenda est quas dolor.`

  constructor() { }

  ngOnInit() {
    this.activityInfo();
  }

  activityInfo() {
    this.description = this.lorem;
  }

}
