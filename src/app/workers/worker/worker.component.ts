import { Component, OnInit, Input } from '@angular/core';
import { Worker } from '../../classes/worker.model';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss']
})
export class WorkerComponent implements OnInit {

  @Input() worker: Worker;

  constructor() { }

  ngOnInit() {
  }

}
