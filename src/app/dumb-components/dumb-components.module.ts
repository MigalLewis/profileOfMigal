import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ContactComponent,
    ProgressBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ContactComponent,
    ProgressBarComponent
  ]
})
export class DumbComponentsModule { }
