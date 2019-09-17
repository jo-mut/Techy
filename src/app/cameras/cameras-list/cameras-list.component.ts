import { Component, OnInit } from '@angular/core';
import { CameraService } from '../../services/camera.service';
import { Camera } from '../../classes/camera.model';

@Component({
  selector: 'app-cameras-list',
  templateUrl: './cameras-list.component.html',
  styleUrls: ['./cameras-list.component.scss']
})
export class CamerasListComponent implements OnInit {

  private cameras: Camera[] = [];

  constructor(private cameraService: CameraService) { }

  ngOnInit() {
    this.getCameras();
  }

  private getCameras() {
    this.cameraService.getCameras().subscribe( data => {
      this.cameras = data;
    })
  }
}
