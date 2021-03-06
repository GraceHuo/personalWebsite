import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SkillsComponent} from './skills/skills.component';
import {Error404Component} from './error404/error404.component';
import {EducationComponent} from './education/education.component';
import {ResumeComponent} from './resume/resume.component';
import {ExperienceComponent} from './experience/experience.component';
import {CertificationsAwardsComponent} from './certifications-awards/certifications-awards.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'projects', loadChildren: () => import('app/projects/projects.module').then(m => m.ProjectsModule)},
  {path: 'education', component: EducationComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'certifications-awards', component: CertificationsAwardsComponent},
  {path: '404', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
