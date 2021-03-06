import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"]
})
export class ExperienceComponent implements OnInit {
  currentTab = 0; // 0 - work, 1 - academic

  timelineConfig = {
    leftContent: "title",
    rightTitle: "company",
    rightContent: "details",
    rightList: "detailsList"
  };

  workList: any[] = [
    {
      company: "Dow Chemical Company",
      title: "Senior M&E IT Business Process Specialist",
      logo:
        "https://res.cloudinary.com/dbinsowan/image/upload/v1556573119/Dow_Chemical_Company_logo.svg_gnosqr.png",
      startDate: "11/01/2020",
      detailsList: [
        "Create innovative digital solutions to improve manufacturing and engineering productivity",
        "Select, config and integrate purchased enterprise software for manufacturing & engineering operations",
        "Develop custom solutions and API's",
        "Conduct testing (both manual and automated) to ensure application stability and fit for purpose",
        "Gather solution requirements and perform business process analysis",
        "Update business process documentation and define most effective technology standards",
        "Work closely with business improvement leaders and technology center representatives to evaluate business needs and solicit opportunities for improvement",
        "Work with third party developers to deliver solution scope successfully on time and within budget"
      ]
    },
    {
      company: "Dow Chemical Company",
      title: "Improvement Manager",
      logo:
        "https://res.cloudinary.com/dbinsowan/image/upload/v1556573119/Dow_Chemical_Company_logo.svg_gnosqr.png",
      startDate: "05/20/2019",
      endDate: "10/31/2020",
      details: "specialized in software QA",
      detailsList: [
        "Introduced software QA testing practices to TES IT software development team, resulting in significant improvement in quality of software deliverables",
        "Created an improvement initiative to implement a automation testing framework",
        "Led the development and execution of test plans and scripts for project-based, new software rollout. Tests include unit testing and integration testing using Jest, as well as web UI testing using Selenium"
      ]
    },
    {
      company: "InterSystems Corporation",
      title: "Software Engineer",
      logo:
        "http://res.cloudinary.com/dbinsowan/image/upload/v1515350978/intersystems_logo_vl3ck3.png",
      startDate: "02/21/2017",
      endDate: "05/17/2019",
      details: "specialized in software development",
      detailsList: [
        "Developed HealthShare Reporting product for reports generation and management using Angular and d3.js. (Key features: responsive, intuitive, flexible chart generation, download & print service, SSO)",
        "Developed responsive and mobile friendly next generation HealthShare Clinical Viewer for searching and viewing patient records, serving HealthShare customers around the world, including VA, HIXNY, and Healthix",
        "Maintained HealthShare UI framework and supported HealthShare product releases, including Personal Community (a patient portal) and Provider Directory",
        "Assisted the support team to fix product issues per customer request"
      ]
    },
    {
      company: "Neusoft Corporation",
      title: "Intern Software Engineer",
      logo:
        "http://res.cloudinary.com/dbinsowan/image/upload/v1515350978/neusoft_logo_jt46ln.jpg",
      startDate: "06/01/2015",
      endDate: "08/31/2015",
      details: "specialized in mobile development",
      detailsList: [
        "Developed an education mobile app using Java",
        "Worked with API's via REST and JSON",
        "Developed graphical user interfaces"
      ]
    }
  ];

  academicList: any[] = [
    {
      company: "Human-Computer Interaction Lab",
      title: "Research Assistant",
      logo:
        "http://res.cloudinary.com/dbinsowan/image/upload/v1515967733/Tufts_logo_za2hbc.jpg",
      startDate: "08/01/2016",
      endDate: "12/31/2016",
      details:
        "Designed and implemented a mobile application to communicate with smart wristband. " +
        "Investigated how movies will affect human's emotions using this app."
    },
    {
      company: "Department of Computer Science",
      title: "Teaching Assistant",
      logo:
        "http://res.cloudinary.com/dbinsowan/image/upload/v1515967733/Tufts_logo_za2hbc.jpg",
      startDate: "09/01/2015",
      endDate: "05/31/2016",
      details: "TA'ed Courses: “Database Systems” and “Algorithm\"",
      detailsList: [
        "Reinforced complex concepts and guided students on problems about SQL and NoSQL systems like MongoDB, Redis, etc",
        "Provided assistance with problems on design and analysis of algorithms"
      ]
    },
    {
      company: "Dr. Christou's Research Group",
      title: "Research Assistant",
      logo:
        "http://res.cloudinary.com/dbinsowan/image/upload/v1515968034/uf_logo_jojuoa.png",
      startDate: "09/01/2010",
      endDate: "05/01/2014",
      details:
        "Focused on bioinorganic chemistry and magnetic applications of multinuclear metal complexes.",
      detailsList: [
        "Developed new synthetic routes to 3 series, totally 18 new complexes."
      ]
    },
    {
      company: "Department of Chemistry",
      title: "Teaching Assistant",
      logo:
        "http://res.cloudinary.com/dbinsowan/image/upload/v1515968034/uf_logo_jojuoa.png",
      startDate: "09/01/2010",
      endDate: "05/31/2014",
      details:
        "TA'ed Courses “General Chemistry”, “Analytical Chemistry” and “General Chemistry Lab”",
      detailsList: [
        "Lectured on General Chemistry Discussion topics, teaching basic chemical knowledge",
        "Led general chemistry lab section"
      ]
    }
  ];

  switchTab(index) {
    this.currentTab = index;
  }

  constructor() {}

  ngOnInit() {}
}
