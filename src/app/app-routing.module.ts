import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './pages/navigating/home-page/about-me/about-me.component';
import { HomePageComponent } from './pages/navigating/home-page/home-page.component';
import { LandingComponent } from './pages/navigating/home-page/landing/landing.component';
import { MyExperienceComponent } from './pages/navigating/home-page/my-experience/my-experience.component';
import { MySkillsComponent } from './pages/navigating/home-page/my-skills/my-skills.component';
import { NotFoundComponent } from './pages/navigating/home-page/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'experience',
    component: MyExperienceComponent
  },
  {
    path: 'about',
    component: AboutMeComponent
  },
  {
    path: 'skills',
    component: MySkillsComponent
  },
  {
    path: '**', 
    pathMatch: 'full',
    component: NotFoundComponent
  },
  { path: "home", component: HomePageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
