import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {SkillsComponent} from './skills/skills.component';
import {NavbarComponent} from './navbar/navbar.component';
import {Error404Component} from './error404/error404.component';
import { FooterComponent } from './footer/footer.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { CertificationsAwardsComponent } from './certifications-awards/certifications-awards.component';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    NavbarComponent,
    Error404Component,
    FooterComponent,
    EducationComponent,
    ExperienceComponent,
    CertificationsAwardsComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
