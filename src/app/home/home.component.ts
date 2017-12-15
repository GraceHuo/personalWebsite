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

  characteristics = [
    {
      name: 'Problem Solver',
      details: 'My work is full of challenges, from figuring out how to best implement a design, to fixing bugs that crop up.' +
      'I enjoy these challenges and I always try to solve these problems smartly, quickly and effectively.'
    },
    {
      name: 'Quick Learner',
      details: 'Tools and techniques used for front-end development change constantly. But I can pick up new skills and apply them quickly.'
    },
    {
      name: 'Team Player',
      details: 'I enjoy being a part of a team. And my teammate enjoy working with me. ' +
      'They described me as "reliable, flexible and organized".'
    }
  ];

  scroll() {
    document.getElementsByClassName('best')[0].scrollIntoView({behavior: 'smooth'});
  }

  constructor() {
  }

  ngOnInit() {
  }
}
