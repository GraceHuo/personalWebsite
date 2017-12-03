import {ProjectsListComponent} from './projects-list/projects-list.component';
import {ProjectDetailsComponent} from './project-details/project-details.component';

export  const projectsRoutes = [
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {path: 'list', component: ProjectsListComponent},
  { path: ':id', component: ProjectDetailsComponent}
];
