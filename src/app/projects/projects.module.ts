import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import {projectsRoutes} from './projects.routes';
import { ProjectThumbnailComponent } from './project-thumbnail/project-thumbnail.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(projectsRoutes)
  ],
  declarations: [ProjectsListComponent, ProjectThumbnailComponent]
})
export class ProjectsModule { }
