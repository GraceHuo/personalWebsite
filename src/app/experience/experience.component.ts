import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  currentTab = 0; // 0 - work, 1 - academic

  timelineConfig = {
    leftContent: 'title',
    rightTitle: 'company',
    rightContent: 'details',
    rightList: 'detailsList'
  };

  workList: any[] = [
    {
      company: 'InterSystems Corporation',
      title: 'Software Developer',
      logo: 'http://res.cloudinary.com/dbinsowan/image/upload/v1515350978/intersystems_logo_vl3ck3.png',
      startDate: 'Feb 2017',
      details: 'Using Angular, developed user interfaces for some commercial applications, including:',
      detailsList: [
        'HealthShare Operational Report (an interactive dashboard and report system)',
        'HealthShare Personal Community (a patient portal)'
      ]
    },
    {
      company: 'Neusoft Corporation',
      title: 'Inter Software Developer',
      logo: 'http://res.cloudinary.com/dbinsowan/image/upload/v1515350978/neusoft_logo_jt46ln.jpg',
      startDate: 'Jun 2015',
      endDate: 'Aug 2015',
      details: 'Contributed to development of an education application for Android platform using Java:',
      detailsList: [
        'Worked with API\'s via REST and JSON',
        'Developed graphical user interfaces'
      ]
    }
  ];

  academicList: any[] = [
    {
      company: 'Human-Computer Interaction Lab',
      title: 'Research Assistant',
      logo: 'http://res.cloudinary.com/dbinsowan/image/upload/v1515967733/Tufts_logo_za2hbc.jpg',
      startDate: 'Aug 2016',
      endDate: 'Dec 2016',
      details: 'Designed and developed an Android appliction to visualize EDA value changes ' +
      'and to detect emotion arousals in real time using Empatica E4 wristband.',
    },
    {
      company: 'Department of Computer Science',
      title: 'Teaching Assistant',
      logo: 'http://res.cloudinary.com/dbinsowan/image/upload/v1515967733/Tufts_logo_za2hbc.jpg',
      startDate: 'Sep 2015',
      endDate: 'May 2016',
      details: 'For Courses “Database Systems” and “Algorithm"',
      detailsList: [
        'Reinforced complex concepts and guided students on problems about SQL and NoSQL systems like MongoDB, Redis, etc',
        'Provided assistance with problems on design and analysis of algorithms']
    },
    {
      company: 'Dr. Christou\'s Group',
      title: 'Research Assistant',
      logo: 'http://res.cloudinary.com/dbinsowan/image/upload/v1515968034/uf_logo_jojuoa.png',
      startDate: 'Sep 2010',
      endDate: 'May 2014',
      details: 'Focused on bioinorganic chemistry and magnetic applications of multinuclear metal complexes.',
    },
    {
      company: 'Department of Chemistry',
      title: 'Teaching Assistant',
      logo: 'http://res.cloudinary.com/dbinsowan/image/upload/v1515968034/uf_logo_jojuoa.png',
      startDate: 'Sep 2010',
      endDate: 'May 2014',
      details: 'For Courses “General Chemistry”, “Analytical Chemistry” and “General Chemistry Lab”',
      detailsList: [
        'Lectured on General Chemistry Discussion topics, teaching basic chemical knowledge',
        'Lead general chemistry lab section'
      ]
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
