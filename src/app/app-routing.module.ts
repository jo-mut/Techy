import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkerComponent } from './workers/worker/worker.component';
import { WorkersListComponent } from './workers/workers-list/workers-list.component';
import { CamerasListComponent } from './cameras/cameras-list/cameras-list.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ActivitiesLogComponent } from './activities/activities-log/activities-log.component';

const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'workers', component: WorkersListComponent},
    {path: 'cameras', component: CamerasListComponent},
    {path: 'activities', component: ActivitiesLogComponent},
    {path: 'projects', component: ProjectsListComponent},
    {path: 'cameras', component: CamerasListComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }
  export const RoutingComponents = [
        DashboardComponent, WorkersListComponent,
        CamerasListComponent, ProjectsListComponent, 
        ActivitiesLogComponent];