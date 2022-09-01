import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { HomePageComponent } from './home-page.component';
import { DumbComponentsModule } from 'src/app/dumb-components/dumb-components.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyExperienceComponent } from './my-experience/my-experience.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    LandingComponent,
    HomePageComponent,
    MySkillsComponent,
    AboutMeComponent,
    MyExperienceComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    DumbComponentsModule
  ]
})
export class HomePageModule { }
