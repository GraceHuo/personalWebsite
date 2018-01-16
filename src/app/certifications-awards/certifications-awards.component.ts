import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-certifications-awards',
  templateUrl: './certifications-awards.component.html',
  styleUrls: ['./certifications-awards.component.scss']
})
export class CertificationsAwardsComponent implements OnInit {
  certificationsList: any[] = [
    {
      title: 'Building and Managing HL7 Productions',
      from: 'Intersystems',
      date: 'Mar 2017'
    },
    {
      title: 'Cache Foundations',
      from: 'Intersystems',
      date: 'April 2017'
    },
    {
      title: 'HealthShare Information Exchange Fundamentals',
      from: 'Intersystems',
      date: 'Jun 2017'
    }
  ];

  awardsList: any[] = [
    {
      title: 'National Scholarship of China (Top 1%)',
      date: '2007'
    },
    {
      title: 'Major Award of Jilin University (Top 5%)',
      date: '2008 & 2009'
    },
    {
      title: 'Dong Rong Scholarship',
      date: '2008'
    },
    {
      title: 'First Prize Scholarship of National University Student Innovation Program',
      date: '2009'
    }

  ];

  constructor() {
  }

  ngOnInit() {
  }

}
