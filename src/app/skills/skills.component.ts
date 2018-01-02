import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillLevels: any[] = [
    {
      code: 1,
      name: 'Export',
      description: 'Skills I am using in daily life'
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
          title: 'Fundamentals',
          items: [
            {
              name: 'HTML',
              level: 1
            },
            {
              name: 'CSS',
              level: 1
            },
            {
              name: 'SASS',
              level: 1
            }
          ]
        },
        {
          title: 'Programming',
          items: [
            {
              name: 'JavaScript',
              level: 1
            },
            {
              name: 'TypeScript',
              level: 2
            },
            {
              name: 'Object-Oriented Programming',
              level: 1
            },
            {
              name: 'Functional Programming',
              level: 1
            }
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
          title: 'Front-End Frameworks',
          items: [
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
              name: 'jQuery',
              level: 2
            },
            {
              name: 'Lodash / Underscore.js',
              level: 1
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
          title: 'Working With Backend',
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
        },
        {
          title: 'Version Control',
          items: [
            {
              name: 'Git',
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
      ],
    },
    {
      title: 'Other Software Dev Skills',
      description: 'I am open to all kinds of new techniques, skills and concept.',
      list: [
        {
          title: 'Languages',
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
            }
          ],
        },
        {
          title: 'Others',
          items: [
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
        }
      ]
    }];

  constructor() {
  }

  ngOnInit() {
  }

}
