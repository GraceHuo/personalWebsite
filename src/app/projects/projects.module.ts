import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProjectsListComponent} from './projects-list/projects-list.component';
import {projectsRoutes} from './projects.routes';
import {ProjectThumbnailComponent} from './project-thumbnail/project-thumbnail.component';
import {ProjectDetailsComponent} from './project-details/project-details.component';
import {ProjectsService} from './services/projects.service';
import {ProjectRouteActivatorService} from './services/project-route-activator.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(projectsRoutes)
  ],
  declarations: [
    ProjectsListComponent,
    ProjectThumbnailComponent,
    ProjectDetailsComponent
  ],
  providers: [
    ProjectRouteActivatorService,
    ProjectsService,
  ],
})
export class ProjectsModule {
}
