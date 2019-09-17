import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { FooterComponent } from './components/footer/footer.component';
import { WorkerComponent } from './workers/worker/worker.component';
import { CameraComponent } from './cameras/camera/camera.component';
import { ProjectComponent } from './projects/project/project.component';
import { ActivityComponent } from './activities/activity/activity.component';
import { WorkerService } from './services/worker.service';
import { ProjectService } from './services/project.service';
import { CameraService } from './services/camera.service';
import { ActivityService } from './services/activity.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    NavbarComponent,
    MainPanelComponent,
    FooterComponent,
    RoutingComponents,
    WorkerComponent,
    CameraComponent,
    ProjectComponent,
    ActivityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WorkerService, ProjectService,CameraService, ActivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
