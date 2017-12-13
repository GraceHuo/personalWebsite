import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  windowHeight = window.innerHeight - 50;
  homeButtons: any[] = [
    {
      routerLink: '/#',
      label: 'RESUME',
      cssClass: 'first'
    },
    {
      routerLink: '/skills',
      label: 'SKILLS',
      cssClass: 'second'
    },
    {
      routerLink: '/#',
      label: 'STORY',
      cssClass: 'third'
    }
  ];
  name: String = 'Yan (Grace) Huo';
  position: String = 'software developer';
  phone: String = '352-278-6271';
  email: String = 'yangracehuo@gmail.com';
  address = {
    street: '533 Mystic Valley Pkwy',
    city: 'Somerville',
    state: 'MA',
    zip: '02144'
  };

  scroll() {
    console.log(document.getElementsByClassName('best')[0].scrollIntoView);
    document.getElementsByClassName('best')[0].scrollIntoView();
  }

  constructor() {
  }

  ngOnInit() {
  }
}
