import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  currentTab = 0; // 0 - timeline 1 - courses

  timelineConfig = {
    leftContent: 'degree',
    rightTitle: 'university',
    rightContent: 'major',
    rightList: 'details'
  };

  educationList: any[] = [
    {
      logo: 'http://res.cloudinary.com/dbinsowan/image/upload/v1515967733/Tufts_logo_za2hbc.jpg',
      major: 'Computer Science,  GPA: 3.95',
      startDate: '08/01/2015',
      endDate: '05/31/2017',
      degree: 'Master\'s Degree',
      details: ['MS student focused on user interface software',
      'Research Assistant in Human Computer Interaction Lab',
        'Teaching Assistant for courses “Database Systems” and “Algorithm"']
    },
    {
      logo: 'http://res.cloudinary.com/dbinsowan/image/upload/v1515967733/Tufts_logo_za2hbc.jpg',
      major: 'Computer Science, GPA: 4.00',
      startDate: '08/01/2014',
      endDate: '05/31/2015',
      degree: 'Post-Baccalaureate',
      details: ['Prepared for a new career in Computer Science by taking all required courses for Computer Science major BS']
    },
    {
      logo: 'http://res.cloudinary.com/dbinsowan/image/upload/v1515968034/uf_logo_jojuoa.png',
      major: 'Chemistry, GPA: 3.87',
      startDate: '08/01/2010',
      endDate: '05/31/2014',
      degree: 'Master\'s Degree',
      details: ['PhD candidate focused on bioinorganic chemistry and magnetic applications of multinuclear metal complexes',
        'Teaching Assistant for courses “General Chemistry”, “Analytical Chemistry” and “General Chemistry Lab”'
      ]
    },
    {
      university: 'Jilin University',
      logo: 'http://res.cloudinary.com/dbinsowan/image/upload/v1515968295/Jilin_logo_ngkseg.jpg',
      major: 'Chemistry, GPA: 3.84',
      startDate: '08/01/2006',
      endDate: '05/31/2010',
      degree: 'Bachelor\'s Degree',
      details: ['BS student focused on inorganic chemistry',
        'Research Assistant in State Key Laboratory of Inorganic Synthesis & Preparative Chemistry']
    }
  ];

  tuftsCoursesList: any[] = [
    {
      code: 'Comp15',
      name: 'Data Structures'
    },
    {
      code: 'Comp160',
      name: 'Algorithms'
    },
    {
      code: 'Comp115',
      name: 'Database Systems'
    },
    {
      code: 'Comp120',
      name: 'Web Engineering'
    },
    {
      code: 'Comp111',
      name: 'Operating Systems'
    },
    {
      code: 'Comp105',
      name: 'Programming Languages'
    },
    {
      code: 'Comp136',
      name: 'Statistical Pattern Recognition'
    },
    {
      code: 'Comp170',
      name: 'Computation Theory'
    },
    {
      code: 'Comp150-nlp',
      name: 'Natural Language Processing'
    },
    {
      code: 'Comp15',
      name: 'Human Computer Interaction'
    },
  ];

  independentCoursesList: any[] = [
    {
      name: 'Advanced JavaScript',
      from: 'Pluralsight'
    },
    {
      name: 'AngularJS Patterns: Clean Code',
      from: 'Pluralsight'
    },
    {
      name: 'AngularJS Fundamentals',
      from: 'Pluralsight'
    },
    {
      name: 'Two Tier Enterprise App and API Development with AngularJS & Sails',
      from: 'Pluralsight'
    },
    {
      name: 'RESTful Web Services with Node.js and Express',
      from: 'Pluralsight'
    },
    {
      name: 'JavaScrip Build Automation With Gulp.js',
      from: 'Pluralsight'
    },
    {
      name: 'Mastering Git',
      from: 'Pluralsight'
    },
    {
      name: 'Programming Mobile Applications for Android Handheld Systems',
      from: 'Coursera'
    },
    {
      name: 'Java Programming: Principles of Software Design',
      from: 'Coursera'
    },
    {
      name: 'HTML, CSS, and Javascript for Web Developers',
      from: 'Coursera'
    },
    {
      name: 'Advanced Styling with Responsive Design',
      from: 'Coursera'
    },
    {
      name: 'Single Page Web Applications with AngularJS',
      from: 'Coursera'
    }
  ];

  switchTab(index) {
    this.currentTab = index;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
