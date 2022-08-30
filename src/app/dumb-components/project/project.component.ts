import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Experience, Project } from 'src/app/models/company.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, AfterViewInit {
  @Input() experience: Experience | undefined;
  @ViewChildren('action') actions: QueryList<ElementRef> | undefined;

  
  logoPattern: string;
  selectedProject: Project | undefined;

  constructor() { 
    this.actions = undefined;
    this.experience = undefined;
    this.logoPattern = '';
    this.selectedProject = undefined;
  }

  ngOnInit(): void {
    this.logoPattern = this.getLogoPattern();
    this.selectedProject = this.experience?.projects[0];

  }

  ngAfterViewInit(): void {
    this.setFocus();
  }

  getLogoPattern(): string {
    return `url(#${this.experience?.company?.logo})`;
  }

  onSelectProject(projectName: string): void {
    this.selectedProject = this.experience?.projects.find(p=>p.name==projectName);
    console.log('this.selectedProject');
    console.log(this.selectedProject);
  }

  setFocus() {    
    console.log(this.actions);  
    const ele = this.actions?.get(0)?.nativeElement;  
    console.log(ele);  
    if (ele) {
      ele.focus();
    }
  }

}
