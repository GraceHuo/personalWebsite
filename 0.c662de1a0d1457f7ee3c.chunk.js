webpackJsonp([0],{"4j95":function(e,t,n){"use strict";function i(e){return r._23(0,[(e()(),r._2(0,0,null,null,3,"div",[],null,[[null,"click"]],function(e,t,n){var i=!0;return"click"===t&&(i=!1!==r._14(e,1).onClick()&&i),i},null,null)),r._1(1,16384,null,0,u.l,[u.k,u.a,[8,null],r.B,r.k],{routerLink:[0,"routerLink"]},null),r._15(2,2),(e()(),r._21(3,null,["\n  ","\n"])),(e()(),r._21(-1,null,["\n"]))],function(e,t){e(t,1,0,e(t,2,0,"/projects",t.component.project.id))},function(e,t){var n=t.component;e(t,3,0,null==n.project?null:n.project.title)})}function l(e){return r._23(0,[(e()(),r._2(0,0,null,null,4,"div",[],null,null,null,null,null)),(e()(),r._21(-1,null,["\n  "])),(e()(),r._2(2,0,null,null,1,"app-project-thumbnail",[],null,null,null,i,p)),r._1(3,114688,null,0,c,[],{project:[0,"project"]},null),(e()(),r._21(-1,null,["\n"]))],function(e,t){e(t,3,0,t.context.$implicit)},null)}function o(e){return r._23(0,[(e()(),r.X(16777216,null,null,1,null,l)),r._1(1,802816,null,0,d.i,[r.M,r.J,r.q],{ngForOf:[0,"ngForOf"]},null),(e()(),r._21(-1,null,["\n\n"]))],function(e,t){e(t,1,0,t.component.projects)},null)}function a(e){return r._23(0,[(e()(),r._2(0,0,null,null,1,"p",[],null,null,null,null,null)),(e()(),r._21(1,null,["\n  project-details ","!\n"])),(e()(),r._21(-1,null,["\n"]))],null,function(e,t){e(t,1,0,t.component.project.title)})}Object.defineProperty(t,"__esModule",{value:!0});var r=n("LMZF"),s=function(){},u=n("UHIZ"),c=function(){function e(){}return e.prototype.ngOnInit=function(){},e}(),p=r._0({encapsulation:0,styles:[[""]],data:{}}),d=n("Un6q"),h=function(){function e(e){this.projectsService=e}return e.prototype.ngOnInit=function(){this.projects=this.projectsService.getProjects()},e}(),g=function(){function e(){}return e.prototype.getProjects=function(){return f},e.prototype.getProject=function(e){return f.find(function(t){return t.id===e})},e}(),f=[{id:1,title:"Healthshare Operation Reporting",image:"",startDate:"06/01/2017",location:"InterSystems Corporation",skills:["JavaScript","Angular","HTML","CSS","Highcharts","D3.js"],description:"An interactive dashboard and report system included in the 2018.1 release",details:"I am in charge of UI development for this project",detailsList:["Started the UI project and created the main application","Built a user-friendly, responsive user interface using Angular, Highcharts and D3.js"]},{id:2,title:"Healthshare Personal Community",image:"",startDate:"02/21/2017",endDate:"06/01/2017",location:"InterSystems Corporation",skills:["JavaScript","Angular","HTML","CSS"],description:"An patient portal",details:"I Supported 12.2 release delivering support for MU3",detailsList:["Primarily fixed UI defects and added small features","Created Cordova development environment for mobile app (both iOS and Android)"]},{id:3,title:"Web-Based Incident Reporting System",image:"",startDate:"01/01/2016",endDate:"05/31/2016",location:"Tufts University",skills:["Ruby on Rails","MySQL"],url:"https://comp120team8reporter.herokuapp.com/",description:"Built with Ruby on Rails framework and MySQL database that allows people reporting and monitoring incidents.",details:"I am one of the three developers in the team. We went through the whole design and develop process, including:",detailsList:["Designed data schema and wireframe.","Implemented minimum viable product (MVP)","Performed tests using Rspec","Optimized static content using technics like expiry, content delivery network, gzip, etc","Wrote RESTful APIs using Grape.","Provide polling and memory aching with Redis"]},{id:4,title:"Sentiment Analysis on Movie Reviews",image:"",startDate:"03/21/2016",endDate:"05/51/2016",location:"Tufts University",skills:["Python"],url:"https://github.com/yanhuowang/NaturalLanguageProcessing",description:"A natural language processing project using Python to investigate how machine learning based MaxEnt classifier works in sentiment analysis",details:'This is the final project for course "Natural Language processing',detailsList:["Applied several natural language processing techniques (e.g part of speed tagging, language modeling, etc.)","Different feature sets for training were investigated. (e.g. unigram, bigram, position, etc.)","Information gain calculation was used to prevent from overfitting.","Optimized static content using technics like expiry, content delivery network, gzip, etc","Naive Bayes classifier was used as baseline"]},{id:5,title:"EDA Arousal Application",image:"",startDate:"12/01/2016",endDate:"02/01/2017",location:"Tufts University",skills:["Java","Android"],url:"https://yanhuowang.github.io/HomePage/",description:"An Android application to visualize EDA value changes and detect emotion arousals in real time using Empatica E4 wristband.",details:"I am one of the two developers in the team. We designed, implemented the application and investigated how movies will affect human's emotions",detailsList:["The first phase of the application defines the baseline. The second phase detects emotional arousal based on real time EDA values.","Besides showing the values, the application provides a visualization (emoji face) which reflects the changes in the EDA values.","When an arousal is detected, there will be a color change in the background"]}],m=r._0({encapsulation:0,styles:[[""]],data:{}}),v=r.Y("ng-component",h,function(e){return r._23(0,[(e()(),r._2(0,0,null,null,1,"ng-component",[],null,null,null,o,m)),r._1(1,114688,null,0,h,[g],null,null)],function(e,t){e(t,1,0)},null)},{},{},[]),_=function(){function e(e,t){this.projectsService=e,this.route=t}return e.prototype.ngOnInit=function(){this.project=this.projectsService.getProject(+this.route.snapshot.params.id)},e}(),j=r._0({encapsulation:0,styles:[[""]],data:{}}),y=r.Y("app-project-details",_,function(e){return r._23(0,[(e()(),r._2(0,0,null,null,1,"app-project-details",[],null,null,null,a,j)),r._1(1,114688,null,0,_,[g,u.a],null,null)],function(e,t){e(t,1,0)},null)},{},{},[]),w=function(){function e(e,t){this.projectsService=e,this.router=t}return e.prototype.canActivate=function(e){var t=!!this.projectsService.getProject(+e.params.id);return t||this.router.navigate(["/404"]),t},e}();n.d(t,"ProjectsModuleNgFactory",function(){return k});var k=r.Z(s,[],function(e){return r._12([r._13(512,r.j,r.V,[[8,[v,y]],[3,r.j],r.v]),r._13(4608,d.l,d.k,[r.s,[2,d.q]]),r._13(4608,g,g,[]),r._13(4608,w,w,[g,u.k]),r._13(512,d.b,d.b,[]),r._13(512,u.o,u.o,[[2,u.t],[2,u.k]]),r._13(512,s,s,[]),r._13(1024,u.i,function(){return[[{path:"",pathMatch:"full",redirectTo:"list"},{path:"list",component:h},{path:":id",component:_,canActivate:[w]}]]},[])])})}});