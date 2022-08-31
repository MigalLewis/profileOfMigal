import { Component } from '@angular/core';
import { slideInAnimation } from './animations/slider.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'Profile of Migal';
}
