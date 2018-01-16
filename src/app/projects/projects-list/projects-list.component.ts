import {Component, OnInit} from '@angular/core';
import {ProjectsService} from '../services/projects.service';

@Component({
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  projectsIntersystems: any[];
  projectsTufts: any[];
  projectsFlorida: any[];

  currentTab = 0; // 0 - computer science, 1 - chemistry

  switchTab(index) {
    this.currentTab = index;
  }

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit() {
    this.projectsIntersystems = this.projectsService.getProjectsIntersystems();
    this.projectsTufts = this.projectsService.getProjectsTufts();
    this.projectsFlorida = this.projectsService.getProjectsFlorida();
  }

}
