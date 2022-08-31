import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private loadingService: LoadingService) {
    this.loadingService.startSpinner();
  }

  ngOnInit(): void {
    this.loadingService.stopSpinner();
  }

}
