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
      label: 'Home'
    },
    {
      routerLink: '/skills',
      label: 'Skills'
    },
    {
      routerLink: '/projects/list',
      label: 'Projects'
    },
    {
      routerLink: '/education',
      label: 'Education'
    },
    {
      routerLink: '/experience',
      label: 'Experience'
    },
    {
      routerLink: '/certifications-awards',
      label: 'Certifications & Awards'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}

