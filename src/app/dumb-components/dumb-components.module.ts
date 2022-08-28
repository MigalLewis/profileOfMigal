import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProjectComponent } from './project/project.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ContactComponent,
    ProgressBarComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ContactComponent,
    ProgressBarComponent,
    ProjectComponent
  ]
})
export class DumbComponentsModule { }
