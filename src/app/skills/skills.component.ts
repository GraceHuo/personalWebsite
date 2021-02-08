import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent implements OnInit {
  skillLevels: any[] = [
    {
      code: 1,
      name: "Expert",
      description: "Skills I am using in daily work"
    },
    {
      code: 2,
      name: "Advanced",
      description: "Skills I have worked with in some projects"
    },
    {
      code: 3,
      name: "Intermediate",
      description: "Skills I have played with and have a basic understanding"
    }
  ];

  skills: any[] = [
    {
      list: [
        {
          title: "Database",
          items: [
            {
              name: "SQL",
              level: 1
            },
            {
              name: "MongoDB",
              level: 2
            },
            {
              name: "Redis",
              level: 2
            }
          ]
        },
        {
          title: "Programming Languages",
          items: [
            {
              name: "JavaScript",
              level: 1
            },
            {
              name: "TypeScript",
              level: 1
            },
            {
              name: "Java",
              level: 2
            },
            {
              name: "Python",
              level: 2
            },
            {
              name: "C++ / C",
              level: 2
            },
            {
              name: "C#",
              level: 3
            },
            {
              name: "Caché ObjectScript",
              level: 2
            },
            {
              name: "Object-Oriented Programming",
              level: 1
            },
            {
              name: "Functional Programming",
              level: 1
            },
            {
              name: "Android",
              level: 2
            },
            {
              name: "Matlab",
              level: 2
            }
          ]
        },
        {
          title: "Frameworks",
          items: [
            {
              name: "React",
              level: 1
            },
            {
              name: "Angular",
              level: 1
            },
            {
              name: ".NET",
              level: 1
            },
            {
              name: "NodeJs",
              level: 2
            },
            {
              name: "ExpressJs",
              level: 2
            },
            {
              name: "Sails",
              level: 3
            },
            {
              name: "Ruby on Rails",
              level: 2
            }
          ]
        },
        {
          title: "API",
          items: [
            {
              name: "RESTful",
              level: 1
            },
            {
              name: "JSON",
              level: 1
            },
            {
              name: "AJAX",
              level: 1
            }
          ]
        },
        {
          title: "Design Basic",
          items: [
            {
              name: "Responsive Design",
              level: 1
            }
          ]
        }
      ]
    },
    {
      list: [
        {
          title: "JavaScript Libraries (including but not limited to)",
          items: [
            {
              name: "Lodash / Underscore.js",
              level: 1
            },
            {
              name: "RxJS",
              level: 1
            },
            {
              name: "jQuery",
              level: 2
            },
            {
              name: "HighCharts",
              level: 2
            },
            {
              name: "d3.js / c3.js",
              level: 2
            },
            {
              name: "moment.js",
              level: 2
            }
          ]
        },
        {
          title: "Styling",
          items: [
            {
              name: "HTML",
              level: 1
            },
            {
              name: "XML",
              level: 1
            },
            {
              name: "CSS",
              level: 1
            },
            {
              name: "SASS",
              level: 1
            },
            {
              name: "Foundation",
              level: 1
            },
            {
              name: "Bootstrap",
              level: 2
            }
          ]
        },
        {
          title: "Testing",
          items: [
            {
              name: "Jest",
              level: 1
            },
            {
              name: "React Testing Library",
              level: 1
            },
            {
              name: "Selenium",
              level: 1
            },
            {
              name: "Katalon Studio",
              level: 1
            },
            {
              name: "Jasmine",
              level: 2
            },
            {
              name: "Mocha",
              level: 3
            }
          ]
        },
        {
          title: "Engineering Tools / Cloud",
          items: [
            {
              name: "Git",
              level: 1
            },
            {
              name: "Perforce",
              level: 1
            },
            {
              name: "Gulp",
              level: 1
            },
            {
              name: "Unix/Linux",
              level: 2
            },
            {
              name: "Azure",
              level: 1
            },
            {
              name: "JIRA",
              level: 2
            }
          ]
        },
        {
          title: "Project Management",
          items: [
            {
              name: "Agile",
              level: 1
            },
            {
              name: "Change Management",
              level: 2
            }
          ]
        }
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
