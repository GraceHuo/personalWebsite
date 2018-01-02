import {Injectable} from '@angular/core';

@Injectable()
export class ProjectsService {
  getProjects() {
    return PROJECTS;
  }

  getProject(id: number) {
    return PROJECTS.find(project => project.id === id);
  }

  constructor() {
  }

}

const PROJECTS = [
  {
    id: 1,
    title: 'Healthshare Operation Reporting',
    image: '',
    startDate: '06/01/2017',
    location: 'InterSystems Corporation',
    skills: ['JavaScript', 'Angular', 'HTML', 'CSS', 'Highcharts', 'D3.js'],
    description: 'An interactive dashboard and report system included in the 2018.1 release',
    details: 'I am in charge of UI development for this project',
    detailsList: [
      'Started the UI project and created the main application',
      'Built a user-friendly, responsive user interface using Angular, Highcharts and D3.js'
    ]
  },
  {
    id: 2,
    title: 'Healthshare Personal Community',
    image: '',
    startDate: '02/21/2017',
    endDate: '06/01/2017',
    location: 'InterSystems Corporation',
    skills: ['JavaScript', 'Angular', 'HTML', 'CSS'],
    description: 'An patient portal',
    details: 'I Supported 12.2 release delivering support for MU3',
    detailsList: [
      'Primarily fixed UI defects and added small features',
      'Created Cordova development environment for mobile app (both iOS and Android)'
    ]
  },
  {
    id: 3,
    title: 'Web-Based Incident Reporting System',
    image: '',
    startDate: '01/01/2016',
    endDate: '05/31/2016',
    location: 'Tufts University',
    skills: ['Ruby on Rails', 'MySQL'],
    url: 'https://comp120team8reporter.herokuapp.com/',
    description: 'Built with Ruby on Rails framework and MySQL database that allows people reporting and monitoring incidents.',
    details: 'I am one of the three developers in the team. We went through the whole design and develop process, including:',
    detailsList: [
      'Designed data schema and wireframe.',
      'Implemented minimum viable product (MVP)',
      'Performed tests using Rspec',
      'Optimized static content using technics like expiry, content delivery network, gzip, etc',
      'Wrote RESTful APIs using Grape.',
      'Provide polling and memory aching with Redis'
    ]
  },
  {
    id: 4,
    title: 'Sentiment Analysis on Movie Reviews',
    image: '',
    startDate: '03/21/2016',
    endDate: '05/51/2016',
    location: 'Tufts University',
    skills: ['Python'],
    url: 'https://github.com/yanhuowang/NaturalLanguageProcessing',
    description: 'A natural language processing project using Python to investigate ' +
    'how machine learning based MaxEnt classifier works in sentiment analysis',
    details: 'This is the final project for course "Natural Language processing',
    detailsList: [
      'Applied several natural language processing techniques (e.g part of speed tagging, language modeling, etc.)',
      'Different feature sets for training were investigated. (e.g. unigram, bigram, position, etc.)',
      'Information gain calculation was used to prevent from overfitting.',
      'Optimized static content using technics like expiry, content delivery network, gzip, etc',
      'Naive Bayes classifier was used as baseline'
    ]
  },
  {
    id: 5,
    title: 'EDA Arousal Application',
    image: '',
    startDate: '12/01/2016',
    endDate: '02/01/2017',
    location: 'Tufts University',
    skills: ['Java', 'Android'],
    url: 'https://yanhuowang.github.io/HomePage/',
    description: 'An Android application to visualize EDA value changes ' +
    'and detect emotion arousals in real time using Empatica E4 wristband.',
    details: 'I am one of the two developers in the team. We designed, implemented the application ' +
    'and investigated how movies will affect human\'s emotions',
    detailsList: [
      'The first phase of the application defines the baseline. The second phase detects emotional arousal based on real time EDA values.',
      'Besides showing the values, the application provides a visualization (emoji face) which reflects the changes in the EDA values.',
      'When an arousal is detected, there will be a color change in the background'
    ]
  }
];
