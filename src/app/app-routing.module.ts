import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SkillsComponent} from './skills/skills.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'projects', loadChildren: 'app/projects/projects.module#ProjectsModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
