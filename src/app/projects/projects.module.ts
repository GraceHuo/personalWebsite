import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import {projectsRoutes} from './projects.routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(projectsRoutes)
  ],
  declarations: [ProjectsListComponent]
})
export class ProjectsModule { }
