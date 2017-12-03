import {Component, OnInit} from '@angular/core';
import {ProjectsService} from '../services/projects.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  project: any;

  constructor(private projectsService: ProjectsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.project = this.projectsService.getProject(+this.route.snapshot.params['id']);
  }

}
