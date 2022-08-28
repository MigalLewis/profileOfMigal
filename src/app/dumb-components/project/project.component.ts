import { Component, Input, OnInit } from '@angular/core';
import { Company, Project } from 'src/app/models/company.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() company: Company;
  logoPattern: string;
  selectedProject: Project;

  constructor() { 
    this.company = {
      name: '',
      logo: ''
    };
    this.logoPattern = '';
    this.selectedProject = {
      name: '',
      description: []
    }
  }

  ngOnInit(): void {
    this.logoPattern = this.getLogoPattern();
  }

  getLogoPattern(): string {
    return `url(#${this.company.logo})`;
  }

}
