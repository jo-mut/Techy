import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { FooterComponent } from './components/footer/footer.component';
import { WorkersListComponent } from './workers/workers-list/workers-list.component';
import { WorkerComponent } from './workers/worker/worker.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { CameraComponent } from './cameras/camera/camera.component';
import { CamerasListComponent } from './cameras/cameras-list/cameras-list.component';
import { PropertiesListComponent } from './properties/properties-list/properties-list.component';
import { PropertyComponent } from './properties/property/property.component';
import { ProjectComponent } from './projects/project/project.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    MainPanelComponent,
    FooterComponent,
    RoutingComponents,
    WorkersListComponent,
    WorkerComponent,
    ProfileComponent,
    CameraComponent,
    CamerasListComponent,
    PropertiesListComponent,
    PropertyComponent,
    ProjectComponent,
    ProjectsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
