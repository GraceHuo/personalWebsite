import {Injectable} from '@angular/core';

@Injectable()
export class ProjectsService {
  getProjects() {
    return PROJECTS;
  }

  getProject(id: number) {
    return PROJECTS.find(project => project.id === id);
  }

  constructor() {
  }

}

const PROJECTS = [
  {
    id: 1,
    title: 'project1',
  },
  {
    id: 2,
    title: 'project2',
  }
];
