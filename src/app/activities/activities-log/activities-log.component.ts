import { Component, OnInit } from '@angular/core';
import { Activity } from '../../classes/activity.model';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-activities-log',
  templateUrl: './activities-log.component.html',
  styleUrls: ['./activities-log.component.scss']
})
export class ActivitiesLogComponent implements OnInit {

  private activities: Activity[] = [];

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.getActivities();
  }

  getActivities() {
    return this.activityService.getActivities()
    .subscribe(data => this.activities = data);
  }

}
