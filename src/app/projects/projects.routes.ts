import {ProjectsListComponent} from './projects-list/projects-list.component';

export  const projectsRoutes = [
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {path: 'list', component: ProjectsListComponent},
];
