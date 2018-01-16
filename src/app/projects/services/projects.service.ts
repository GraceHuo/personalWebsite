import {Injectable} from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class ProjectsService {
  getProjects() {
    return PROJECTS;
  }

  getProjectsIntersystems() {
    return _.filter(PROJECTS, ['location', 'InterSystems Corporation']);
  }

  getProjectsTufts() {
    return _.filter(PROJECTS, ['location', 'Tufts University']);
  }

  getProjectsFlorida() {
    return _.filter(PROJECTS, ['location', 'University of Florida']);
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
    image: 'http://res.cloudinary.com/dbinsowan/image/upload/v1515340039/no_image_tjsdit.png',
    startDate: 'Jun 2017',
    location: 'InterSystems Corporation',
    skills: ['JavaScript', 'Angular', 'HTML', 'CSS', 'Highcharts', 'D3.js'],
    description: 'An interactive dashboard and report system built with Angular, Highcharts and D3.js ' +
    'included in the 2018.1 release of HealthShare Information Exchange',
    details: 'I am in charge of the UI development for this project',
    detailsList: [
      'Started the UI project and created the main application',
      'Built a user-friendly, responsive user interface'
    ]
  },
  {
    id: 2,
    title: 'Healthshare Personal Community',
    image: 'http://res.cloudinary.com/dbinsowan/image/upload/v1515340040/project_pc_ko7adl.png',
    startDate: 'Feb 2017',
    endDate: 'Jun 2017',
    location: 'InterSystems Corporation',
    skills: ['JavaScript', 'Angular', 'HTML', 'CSS'],
    description: 'An patient portal built by Angular currently used by many hospitals and patients',
    details: 'I supported 12.2 release delivering support for MU3',
    detailsList: [
      'Primarily fixed UI defects and made feature enhancements',
      'Contributed to Create Cordova development environment for mobile app (both iOS and Android)'
    ]
  },
  {
    id: 3,
    title: 'Web-Based Incident Reporting System',
    image: 'http://res.cloudinary.com/dbinsowan/image/upload/v1515340039/project_incidents_a13dw9.jpg',
    startDate: 'Jan 2016',
    endDate: 'May 2016',
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
      'Implemented polling and memory aching with Redis'
    ]
  },
  {
    id: 4,
    title: 'Sentiment Analysis on Movie Reviews',
    image: 'http://res.cloudinary.com/dbinsowan/image/upload/v1515340040/sentiment_dsrfrm.jpg',
    startDate: 'Mar 2016',
    endDate: 'May 2016',
    location: 'Tufts University',
    skills: ['Python'],
    url: 'https://github.com/yanhuowang/NaturalLanguageProcessing',
    report: 'https://github.com/yanhuowang/NaturalLanguageProcessing/blob/master/sentiment_analysis/nlp_report.pdf',
    description: 'A natural language processing project using Python to investigate ' +
    'how machine learning based MaxEnt classifier works in sentiment analysis',
    details: 'This is the final project for course "Natural Language processing":',
    detailsList: [
      'Applied several natural language processing techniques (e.g part of speed tagging, language modeling, etc.)',
      'Different feature sets for training were investigated. (e.g. unigram, bigram, position, etc.)',
      'Information gain calculation was used to prevent from overfitting.',
      'Naive Bayes classifier was used as baseline'
    ]
  },
  {
    id: 5,
    title: 'EDA Arousal Application',
    image: 'http://res.cloudinary.com/dbinsowan/image/upload/v1515340040/project_eda_lg1y3z.jpg',
    startDate: 'Dec 2016',
    endDate: 'Feb 2017',
    location: 'Tufts University',
    skills: ['Java', 'Android'],
    url: 'https://github.com/yanhuowang/EmotionArousalsDetectorEmpatica',
    report: 'https://github.com/yanhuowang/EmotionArousalsDetectorEmpatica/blob/master/report.pdf',
    description: 'An Android application to visualize EDA value changes ' +
    'and detect emotion arousals in real time using Empatica E4 wristband.',
    details: 'I am one of the two developers in the team. We designed, implemented the application ' +
    'and investigated how movies will affect human\'s emotions',
    detailsList: [
      'The first phase of the application defines the baseline. The second phase detects emotional arousal based on real time EDA values.',
      'Besides showing the values, the application provides a visualization (emoji face) which reflects the changes in the EDA values.',
      'When an arousal is detected, there will be a color change in the background'
    ]
  },
  {
    id: 6,
    title: 'Comproportionation Reactions As A Route To Manganese Lanthanide Clusters',
    image: 'http://res.cloudinary.com/dbinsowan/image/upload/v1516067414/imageedit_5_6408946011_f2bklv.png',
    startDate: 'Aug 2010',
    endDate: 'May 2012',
    location: 'University of Florida',
    skills: ['Synthesis', 'Spectroscopy', 'Bio-Inorganic Chemistry', 'Magnetic Materials'],
    thesis: 'http://ufdc.ufl.edu/UFE0046952/00001?search=yan+=huo',
    description: 'Synthesis of the Lanthanide-substituted Oxygen-evolving center models',
    details: 'Synthesize and investigated a series of Mn5Ln clusters',
    detailsList: ['They are the closest synthetic model for a Ln-substituted OEC',
      'They are also potential Single-Molecule magnets'
    ]
  },
  {
    id: 7,
    title: 'The First Manganese Lanthanide "Open" Cube Dimer',
    image: 'http://res.cloudinary.com/dbinsowan/image/upload/v1516067415/imageedit_9_8341709326_haljcy.png',
    startDate: 'Aug 2012',
    endDate: 'May 2014',
    location: 'University of Florida',
    skills: ['Synthesis', 'Spectroscopy', 'Bio-Inorganic Chemistry', 'Magnetic Materials'],
    thesis: 'http://ufdc.ufl.edu/UFE0046952/00001?search=yan+=huo',
    description: 'Relevant to both bio-inorganic chemistry and magnetic materials',
    details: 'Synthesized and investigated a series of Mn6Ln2 clusters',
    detailsList: [' The ferromagnetic interactions are dominant in these compounds, ' +
    'the Tb, Dy and Ho analogues exhibit Single-Molecule magnets behavior'
    ]
  }
];
