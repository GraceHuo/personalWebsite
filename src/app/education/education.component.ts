import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  timelineConfig = {
    leftContent: 'degree',
    rightTitle: 'university',
    rightContent: 'major',
  };
  educationList: any[] = [
    {
      university: 'Tufts University',
      universityLogo: '',
      major: 'Computer Science,  GPA: 3.95',
      startDate: '2015',
      endDate: '2017',
      degree: 'Master\'s Degree'
    },
    {
      university: 'Tufts University',
      universityLogo: '',
      major: 'Computer Science, GPA: 4.00',
      startDate: '2014',
      endDate: '2015',
      degree: 'Post-Baccalaureate'
    },
    {
      university: 'University of Florida',
      universityLogo: '',
      major: 'Chemistry, GPA: 3.87',
      startDate: '2010',
      endDate: '05/31/14',
      degree: 'Master\'s Degree'
    },
    {
      university: 'Jilin University',
      universityLogo: '',
      major: 'Chemistry, GPA: 3.84',
      startDate: '2006',
      endDate: '2010',
      degree: 'Bachelor\'s Degree'
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
    },
    {
      name: 'AngularJS Fundamentals',
      from: 'Pluralsight'
    },
    {
      name: 'JavaScrip Build Automation With Gulp.js',
      from: 'Pluralsight'
    },
    {
      name: 'Advanced JavaScript',
      from: 'Pluralsight'
    },
    {
      name: 'AngularJS Patterns: Clean Code',
      from: 'Pluralsight'
    },
    {
      name: 'Mastering Git',
      from: 'Pluralsight'
    }

  ];

  constructor() {
  }

  ngOnInit() {
  }

}
