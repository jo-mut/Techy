import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../../services/worker.service';
import { Worker } from '../../classes/worker.model';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.scss']
})
export class WorkersListComponent implements OnInit {

  private workers: Worker[] = [];

  constructor(private workerService: WorkerService) { }

  ngOnInit() {
    this.getWorkers();
  }

  private getWorkers() {
    this.workerService.getWorkers().subscribe( data => {
      this.workers = data;
    })
  }

}
