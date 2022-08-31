import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(private loadingService: LoadingService) { 
    this.loadingService.startSpinner();
  }

  ngOnInit(): void {
    this.loadingService.stopSpinner();
  }

}
