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

  getProjectsAfterWork() {
    return _.filter(PROJECTS, ['location', 'After Work']);
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
    image: 'https://res.cloudinary.com/dbinsowan/image/upload/v1556579733/operational_report_mflwup.png',
    startDate: '06/01/2017',
    location: 'InterSystems Corporation',
    skills: ['JavaScript', 'Angular', 'HTML', 'CSS', 'Highcharts', 'D3.js'],
    description: 'An interactive dashboard and report system built with Angular, Highcharts and D3.js ' +
    'included in the 2018.1 release of HealthShare Information Exchange',
    details: 'Was in charge of the UI development for this project',
    detailsList: [
      'Started the UI project and created the main application',
      'Built user-friendly, responsive user interfaces (Key features: responsive, intuitive, flexible chart generation, download & print service, SSO)'
    ]
  },
  {
    id: 2,
    title: 'HealthShare Clinical Viewer',
    image: 'https://res.cloudinary.com/dbinsowan/image/upload/v1556579797/viewer_avrxbk.png',
    startDate: '11/01/2017',
    location: 'InterSystems Corporation',
    skills: ['JavaScript', 'SQL'],
    description: 'Responsive and mobile friendly next generation HealthShare Clinical Viewer for searching and viewing patient records, serving HealthShare customers around the world, including VA, HIXNY, and Healthix',
    details: 'Was in charge of the UI development for this project',
    detailsList: [
    ]
  },
  {
    id: 3,
    title: 'HealthShare Personal Community',
    image: 'http://res.cloudinary.com/dbinsowan/image/upload/v1515340040/project_pc_ko7adl.png',
    startDate: '02/21/2017',
    endDate: '06/01/2017',
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
    id: 4,
    title: 'Electrodermal Activity (EDA) Arousal Detector',
    image: 'http://res.cloudinary.com/dbinsowan/image/upload/v1515340040/project_eda_lg1y3z.jpg',
    startDate: '12/01/2016',
    endDate: '02/28/2017',
    location: 'Tufts University',
    skills: ['Human–computer Interaction', 'Java', 'Mobile-Development'],
    url: 'https://github.com/yanhuowang/EmotionArousalsDetectorEmpatica',
    description: 'Mobile application to communicate with smart wristband. ' +
    'Used by Tufts HCI lab to visualize Electrodermal Activity (EDA) value changes and detect emotion arousals in real-time ',
    detailsList: [
      'Designed and implemented a mobile application to communicate with smart wristband (Empatica E4) ' +
      'and detect emotion arousals in real-time',
      'Applied the app to capture human EDA signal and detect EDA arousals',
      'Investigated how movies will affect human\'s emotions',
      'Currently used by Tufts Human-Computer Interaction Lab for for further research'
    ]
  },
  {
    id: 5,
    title: 'Sentiment Analysis on Movie Reviews',
    image: 'http://res.cloudinary.com/dbinsowan/image/upload/v1515340040/sentiment_dsrfrm.jpg',
    startDate: '03/01/2016',
    endDate: '05/31/2016',
    location: 'Tufts University',
    skills: ['Python', 'Nature Language Processing'],
    url: 'https://github.com/yanhuowang/NaturalLanguageProcessing',
    report: 'https://github.com/yanhuowang/NaturalLanguageProcessing/blob/master/sentiment_analysis/nlp_report.pdf',
    description: 'Natural Language Processing (NLP) project using Python to investigate ' +
    'how machine learning based Maximum Entropy classifier works in sentiment analysis',
    details: 'Was rated as top term-project of course "Natural Language processing"',
    detailsList: [
      'Applied several natural language processing techniques (e.g part of speed tagging, language modeling, etc.)',
      'Investigated Different feature sets for training (e.g. unigram, bigram, position, etc.)',
      'Used information gain calculation to prevent from overfitting.',
      'Used Naive Bayes classifier as baseline'
    ]
  },
  {
    id: 6,
    title: 'Web-Based Incident Reporting System',
    image: 'http://res.cloudinary.com/dbinsowan/image/upload/v1515340039/project_incidents_a13dw9.jpg',
    startDate: '01/01/2016',
    endDate: '05/31/2016',
    location: 'Tufts University',
    skills: ['Ruby on Rails', 'MySQL'],
    url: 'https://comp120team8reporter.herokuapp.com/',
    description: 'An application built with Ruby on Rails framework and MySQL database ' +
    'that allows people reporting and monitoring incidents.',
    details: 'Completed the whole design and develop process and won first place among eight projects',
    detailsList: []
  },
  {
    id: 7,
    title: 'Inventory Manager',
    image: 'https://res.cloudinary.com/dbinsowan/image/upload/v1556579733/inventory_fjd9mn.png',
    startDate: '12/01/2018',
    endDate: '12/31/2018',
    location: 'After Work',
    skills: ['Angular', 'NodeJs', 'ExpressJs'],
    url: 'https://github.com/GraceHuo/InventoryManager',
    apiUrl: 'https://github.com/GraceHuo/InventoryManagerApi',
    description: 'An application built with Angular and NodeJs (ExpressJs) ' +
      'that allows people to manage home inventory.',
    details: 'A 2-Tier application with separate frontend and backend',
    detailsList: []
  },
  {
    id: 8,
    title: 'Activity Tracker',
    image: 'https://res.cloudinary.com/dbinsowan/image/upload/v1556585194/Screen_Shot_2019-04-29_at_8.42.30_PM_auyzra.png',
    startDate: '02/01/2019',
    endDate: '02/28/2019',
    location: 'After Work',
    skills: ['.NET', 'C#', 'jQuery'],
    url: 'https://github.com/GraceHuo/activityTracker',
    description: 'An application built with .NET framework ' +
      'that allows users to post and follow activities.',
    details: '',
    detailsList: []
  },
  {
    id: 9,
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
    id: 10,
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
