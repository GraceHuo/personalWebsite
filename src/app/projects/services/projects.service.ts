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
    title: 'HealthShare Operation Reporting',
    image: 'http://res.cloudinary.com/dbinsowan/image/upload/v1515340039/no_image_tjsdit.png',
    startDate: 'Jun 2017',
    location: 'InterSystems Corporation',
    skills: ['JavaScript', 'Angular', 'HTML', 'CSS', 'Highcharts', 'D3.js'],
    description: 'An interactive dashboard and report system built with Angular, Highcharts and D3.js ' +
    'included in the 2018.1 release of HealthShare Information Exchange',
    details: 'Was in charge of the UI development for this project',
    detailsList: [
      'Started the UI project and created the main application',
      'Built a user-friendly, responsive user interface'
    ]
  },
  {
    id: 2,
    title: 'HealthShare Personal Community',
    image: 'http://res.cloudinary.com/dbinsowan/image/upload/v1515340040/project_pc_ko7adl.png',
    startDate: 'Feb 2017',
    endDate: 'Jun 2017',
    location: 'InterSystems Corporation',
    skills: ['JavaScript', 'Angular', 'HTML', 'CSS'],
    description: 'An patient portal built with Angular and currently used by thousands of clinicians and patients',
    details: 'Supported 12.2 release delivering support for MU3',
    detailsList: [
      'Primarily made feature enhancements and fixed UI defects',
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
    description: 'An application built with Ruby on Rails framework and MySQL database ' +
    'that allows people reporting and monitoring incidents.',
    details: 'Completed the whole design and develop process and won first place among eight projects',
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
    skills: ['Python', 'Nature Language Processing'],
    url: 'https://github.com/yanhuowang/NaturalLanguageProcessing',
    report: 'https://github.com/yanhuowang/NaturalLanguageProcessing/blob/master/sentiment_analysis/nlp_report.pdf',
    description: 'Natural Language Processing (NLP) project using Python to investigate ' +
    'how machine learning based Maximum Entropy classifier works in sentiment analysis',
    details: 'Rated as top term-project of course "Natural Language processing"',
    detailsList: [
      'Applied several natural language processing techniques (e.g part of speed tagging, language modeling, etc.)',
      'Investigated Different feature sets for training (e.g. unigram, bigram, position, etc.)',
      'Used information gain calculation to prevent from overfitting.',
      'Used Naive Bayes classifier as baseline'
    ]
  },
  {
    id: 5,
    title: 'Electrodermal Activity (EDA) Arousal Detector',
    image: 'http://res.cloudinary.com/dbinsowan/image/upload/v1515340040/project_eda_lg1y3z.jpg',
    startDate: 'Dec 2016',
    endDate: 'Feb 2017',
    location: 'Tufts University',
    skills: ['Human–computer Interaction', 'Java', 'Android'],
    url: 'https://github.com/yanhuowang/EmotionArousalsDetectorEmpatica',
    description: 'An Android application to visualize Electrodermal Activity (EDA) value changes ' +
    'and detect emotion arousals in real-time using smart wristband.',
    detailsList: [
      'Designed and implemented an Android application to communicate with smart wristband (Empatica E4) ' +
      'in real-time and detect emotion arousals',
      'Applied the app to capture human EDA signal and detect EDA arousal',
      'Investigated how movies will affect human\'s emotions',
      'currently used by Tufts Human-Computer Interaction Lab for for further research'
    ]
  },
  {
    id: 6,
    title: 'Bioinorganic Chemistry',
    image: 'http://res.cloudinary.com/dbinsowan/image/upload/v1516067414/imageedit_5_6408946011_f2bklv.png',
    startDate: '08/01/2010',
    endDate: '05/31/2012',
    location: 'University of Florida',
    skills: ['Bio-Inorganic Chemistry', 'Inorganic Synthesis', 'Crystallography', 'Spectroscopy (IR, NMR, UV/VIS)', 'Electrochemical'],
    thesis: 'http://ufdc.ufl.edu/UFE0046952/00001?search=yan+=huo',
    description: 'Synthesis of 3rd generation synthetic models for metalloenzymes',
    detailsList: ['Developed synthetic routes to obtain  a number of tetranuclear, oxide bridged, Mn-Ln carboxylate cubes involving high ' +
    'oxidation state metal ions to function as Ln-substituted synthetic models for the WOC.',
      'Studied the electronic, optical and magnetic properties of the synthetic species which mimic the corresponding native site',
      'Provided important source of information about the structure and mechanism of action of metallobiomolecules.'
    ]
  },
  {
    id: 7,
    title: 'Supramolecular & Cluster Chemistry',
    image: 'http://res.cloudinary.com/dbinsowan/image/upload/v1516067415/imageedit_9_8341709326_haljcy.png',
    startDate: '08/01/2012',
    endDate: '05/31/2014',
    location: 'University of Florida',
    skills: ['Magnetic Materials', 'Inorganic Synthesis', 'Crystallography', 'Spectroscopy (IR, NMR, UV/VIS)', 'Bio-Inorganic Chemistry'],
    thesis: 'http://ufdc.ufl.edu/UFE0046952/00001?search=yan+=huo',
    description: 'Synthesis of High Nuclearity Complexes',
    detailsList: ['Developed synthetic routes to obtain a variety of high nuclearity Manganese-Lanthanide clusters, ' +
    'including the first Manganese-Lanthanide "Open" Cube Dimer (Mn6Ln2)',
      'Investigated the magnetic properties of these clusters, proving that some of them are new Single-Molecule magnets'
    ]
  }
];
