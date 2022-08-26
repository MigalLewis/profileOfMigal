import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { HomePageComponent } from './home-page.component';
import { DumbComponentsModule } from 'src/app/dumb-components/dumb-components.module';



@NgModule({
  declarations: [
    LandingComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    DumbComponentsModule
  ]
})
export class HomePageModule { }
