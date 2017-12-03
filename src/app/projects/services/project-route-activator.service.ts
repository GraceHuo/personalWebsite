import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {ProjectsService} from './projects.service';

@Injectable()
export class ProjectRouteActivatorService implements CanActivate {

  constructor(private projectsService: ProjectsService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot) {
    const projectExists = !!this.projectsService.getProject(+route.params['id']);

    if (!projectExists) {
      this.router.navigate(['/404']);
    }
    return projectExists;
  }

}
