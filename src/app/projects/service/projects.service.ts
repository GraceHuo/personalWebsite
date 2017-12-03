import {Injectable} from '@angular/core';

@Injectable()
export class ProjectsService {
  getProjects() {
    return PROJECTS;
  }

  constructor() {
  }

}

const PROJECTS = [
  {
    title: 'project1',
  },
  {
    title: 'project2',
  }
];
