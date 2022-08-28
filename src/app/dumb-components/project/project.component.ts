import { Component, Input, OnInit } from '@angular/core';
import { Experience, Project } from 'src/app/models/company.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() experience: Experience | undefined;
  logoPattern: string;
  selectedProject: Project | undefined;

  constructor() { 
    this.experience = undefined;
    this.logoPattern = '';
    this.selectedProject = undefined;
  }

  ngOnInit(): void {
    this.logoPattern = this.getLogoPattern();
  }

  getLogoPattern(): string {
    return `url(#${this.experience?.company?.logo})`;
  }

}
