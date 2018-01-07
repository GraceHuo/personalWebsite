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
      date: '02/21/17'
    },
    {
      title: 'Cache Foundations',
      from: 'Intersystems',
      date: '02/21/17'
    },
    {
      title: 'HealthShare Information Exchange Fundamentals',
      from: 'Intersystems',
      date: '02/21/17'
    }
  ];

  awardsList: any[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
