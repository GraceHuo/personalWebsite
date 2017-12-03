import {Component, OnInit} from '@angular/core';
import {ProjectsService} from '../services/projects.service';

@Component({
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  projects: any[];

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
  }

}
