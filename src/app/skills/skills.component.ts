import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillLevels: any[] = [
    {
      code: 1,
      name: 'Expert',
      description: 'Skills I am using in daily work'
    },
    {
      code: 2,
      name: 'Advanced',
      description: 'Skills I have worked with in some projects'
    },
    {
      code: 3,
      name: 'Intermediate',
      description: 'Skills I have played with and have a basic understanding'
    }
  ];

  skills: any[] = [
    {
      title: 'Front-End Dev Skills',
      description: 'I am a front-end developer, ' +
      'the followings are the techniques and tools I use to develop reliable and user-friendly websites.',
      list: [
        {
          title: 'Programming',
          items: [
            {
              name: 'HTML',
              level: 1
            },
            {
              name: 'JavaScript',
              level: 1
            },
            {
              name: 'Object-Oriented Programming',
              level: 1
            },
            {
              name: 'Functional Programming',
              level: 1
            },
            {
              name: 'TypeScript',
              level: 2
            },
          ]
        },
        {
          title: 'JavaScript Frameworks',
          items: [
            {
              name: 'AngularJS',
              level: 1
            },
            {
              name: 'Angular2',
              level: 2
            }
          ]
        },
        {
          title: 'Styling',
          items: [
            {
              name: 'CSS',
              level: 1
            },
            {
              name: 'SASS',
              level: 1
            },
            {
              name: 'Foundation',
              level: 1
            },
            {
              name: 'Bootstrap',
              level: 2
            }
          ]
        },
        {
          title: 'JavaScript Libraries (including but not limited to)',
          items: [
            {
              name: 'Lodash / Underscore.js',
              level: 1
            },
            {
              name: 'jQuery',
              level: 2
            },
            {
              name: 'HighCharts',
              level: 2
            },
            {
              name: 'd3.js / c3.js',
              level: 2
            },
            {
              name: 'moment.js',
              level: 2
            }
          ]
        },
        {
          title: 'Design Basic',
          items: [
            {
              name: 'Responsive Design',
              level: 1
            }
          ]
        },
        {
          title: 'Testing',
          items: [
            {
              name: 'Jasmine Framework',
              level: 1
            },
            {
              name: 'Protractor Framework',
              level: 3
            }
          ]
        }
      ],
    },
    {
      title: 'Back-End Dev Skills',
      description: 'I am on the track for a full-stack developer. And I am open to all kinds of new techniques, skills and concepts.',
      list: [
        {
          title: 'Programming',
          items: [
            {
              name: 'Caché ObjectScript',
              level: 2
            },
            {
              name: 'NodeJs',
              level: 3
            },
            {
              name: 'ExpressJs',
              level: 3
            },
            {
              name: 'Sails',
              level: 3
            }
          ],
        },
        {
          title: 'Database',
          items: [
            {
              name: 'SQL',
              level: 2
            }
          ]
        },
        {
          title: 'API',
          items: [
            {
              name: 'RESTful',
              level: 1
            },
            {
              name: 'JSON',
              level: 1
            }
          ]
        }
      ]
    },
    {
      title: 'Other Dev Skills',
      list: [
        {
          title: 'Programming',
          items: [
            {
              name: 'Java',
              level: 2
            },
            {
              name: 'Python',
              level: 2
            },
            {
              name: 'C++ / C',
              level: 2
            },
            {
              name: 'Ruby on Rails',
              level: 2
            },
            {
              name: 'Android',
              level: 2
            },
            {
              name: 'Matlab',
              level: 2
            }
          ],
        },
        {
          title: 'Version Control',
          items: [
            {
              name: 'Git',
              level: 1
            },
            {
              name: 'Perforce',
              level: 1
            },
          ]
        },
        {
          title: 'Automation',
          items: [
            {
              name: 'Gulp',
              level: 2
            },
          ],
        }
      ]
    }];

  constructor() {
  }

  ngOnInit() {
  }

}
