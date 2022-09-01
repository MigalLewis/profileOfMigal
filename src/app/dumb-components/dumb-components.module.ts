import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProjectComponent } from './project/project.component';
import { FirebaseToDatePipe } from '../pipes/FirebaseToDate.pipe';
import { RouterModule } from '@angular/router';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingComponent } from './loading/loading.component';
import { PokemonComponent } from './pokemon/pokemon.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ContactComponent,
    ProgressBarComponent,
    ProjectComponent,
    FirebaseToDatePipe,
    LoadingComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgxUsefulSwiperModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    ContactComponent,
    ProgressBarComponent,
    ProjectComponent,
    LoadingComponent,
    PokemonComponent
  ]
})
export class DumbComponentsModule { }
