import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  timelineConfig = {
    leftContent: 'title',
    rightTitle: 'company',
    rightContent: 'details',
    rightList: 'detailsList'
  };
  workList: any[] = [
    {
      company: 'Intersystems',
      title: 'Inter Software Developer',
      companyLogo: '',
      startDate: '02/21/17',
      details: 'Using Angular, developed user interfaces for some commercial applications, including:',
      detailsList: [
        'HealthShare Operational Report (an interactive dashboard and report system)',
        'HealthShare Personal Community (a patient portal)'
      ]
    },
    {
      company: 'Neusoft',
      title: 'Inter Software Developer',
      companyLogo: '',
      startDate: '06/01/15',
      endDate: '08/31/15',
      details: 'Contributed to development of an education application for Android platform using Java:',
      detailsList: [
        'Worked with API\'s via REST and JSON',
        'Developed graphical user interfaces'
      ]
    }
  ];

  academicList: any[] = [
    {
      company: 'Tufts University HCI Lab',
      title: 'Research Assistant',
      companyLogo: '',
      startDate: '08/01/16',
      endDate: '12/31/16',
      details: 'Designed and developed an Android appliction to visualize EDA value changes ' +
      'and to detect emotion arousals in real time using Empatica E4 wristband.',
    },
    {
      company: 'Tufts University',
      title: 'Teaching Assistant',
      companyLogo: '',
      startDate: '09/01/15',
      endDate: '05/31/16',
      details: 'For Courses “Database Systems” and “Algorithm"',
      detailsList: [
        'Reinforced complex concepts and guided students on problems about SQL and NoSQL systems like MongoDB, Redis, etc',
        'Provided assistance with problems on design and analysis of algorithms']
    },
    {
      company: 'University of Florida',
      title: 'Research Assistant',
      companyLogo: '',
      startDate: '09/01/10',
      endDate: '05/31/14',
      details: 'Focused on bioinorganic chemistry and magnetic applications of multinuclear metal complexes.',
    },
    {
      company: 'University of Florida',
      title: 'Teaching Assistant',
      companyLogo: '',
      startDate: '09/01/10',
      endDate: '05/31/14',
      details: 'For Courses “General Chemistry”, “Analytical Chemistry” and “General Chemistry Lab”',
      detailsList: [
        'Lectured on General Chemistry Discussion topics, teaching basic chemical knowledge',
        'Lead general chemistry lab section'
      ]
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
