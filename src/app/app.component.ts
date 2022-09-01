import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { slideInAnimation } from './animations/slider.animation';
import { LoadingService } from './services/loading.service';
import { startWith, tap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Profile of Migal';
  loading: boolean;
  images: string[];
  loaded = 0;

  constructor(public loadingService: LoadingService) {
    this.loading = true;
    this.images = [
      '../assets/images/clouds_3.webp',
      '../assets/images/Migal_begin_journey_web.jpg',
      '../assets/images/Migal_Career_Journey.png',
      '../assets/images/Migal_mobile.png',
      '../assets/images/profile (1).jpg',
      '../assets/images/pokeball.png',
      '../assets/images/otom.png',
    ];
  }

  ngOnInit(): void {
    this.loadImages();
  }

  ngAfterViewInit() {
    this.loadingService.isLoading()
        .pipe(
            startWith(true),
            delay(0),
            tap((isLoading: boolean) => this.loading = isLoading)
        ).subscribe();
  }



  loadImages(){
    for(let i = 0; i < this.images.length; i++){
      let img = new Image();
      img.onload = () => {
        this.onLoaded();
      }
      img.src = this.images[i];
    }
  }

  onLoaded(){
    this.loaded++;
    if(this.images.length == this.loaded){
      //all images loaded
    }
  }
}
