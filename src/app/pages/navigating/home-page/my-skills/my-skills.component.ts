import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {

  constructor(private loadingService: LoadingService) { 
    this.loadingService.startSpinner();
  }

  ngOnInit(): void {
    this.loadingService.stopSpinner();
  }

}
