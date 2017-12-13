import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  name: String = 'Grace Huo';

  navItems: any[] = [
    {
      routerLink: '/home',
      label: 'HOME'
    },
    {
      routerLink: '/skills',
      label: 'SKILLS'
    },
    {
      routerLink: '/projects/list',
      label: 'PROJECTS'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}

