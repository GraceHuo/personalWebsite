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
      routerLink: '/projects',
      label: 'PROJECTS',
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
      details: 'My work is full of challenges, from figuring out how to best implement a customer request, to quickly fixing bugs that crop up. ' +
      'I enjoy these challenges and I always try to solve these problems smartly and effectively.'
    },
    {
      name: 'Quick Learner',
      details: 'Tools and techniques used for front-end development change constantly. ' +
      'But I can pick up new skills and apply them very quickly. ' +
      'Over the last year, I am done for being from someone who don\'t know about Angular at all to be the most senior Angular developer in the team.'
    },
    {
      name: 'Team Player',
      details: 'I enjoy being a part of a team and make contribution to the team. ' +
      'My colleagues enjoy working with me as well. They describe me as "reliable, flexible and organized".'
    }
  ];

  scrollDown() {
    document.getElementsByClassName('down')[0].scrollIntoView({behavior: 'smooth'});
  }

  scrollUp() {
    document.getElementsByClassName('up')[0].scrollIntoView({behavior: 'smooth'});
  }

  constructor() {
  }

  ngOnInit() {
  }
}
