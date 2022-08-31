import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Experience, Project } from 'src/app/models/company.model';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, AfterViewInit {
  @Input() experience: Experience | undefined;
  @ViewChildren('action') actions: QueryList<ElementRef> | undefined;

  config: SwiperOptions;  

  images: Array<{src: string, alt:string}> = [
    {
      src: 'https://loremflickr.com/g/600/400/paris',
      alt: 'Image 1',
    }, {
      src: 'https://loremflickr.com/600/400/brazil,rio',
      alt: 'Image 2'
    }, {
      src: 'https://loremflickr.com/600/400/paris,girl/all',
      alt: 'Image 3'
    }, {
      src: 'https://loremflickr.com/600/400/brazil,rio',
      alt: 'Image 4'
    }, {
      src: 'https://loremflickr.com/600/400/paris,girl/all',
      alt: 'Image 5'
    }, {
      src: 'https://loremflickr.com/600/400/brazil,rio',
      alt: 'Image 6'
    }    
  ]
  
  logoPattern: string;
  selectedProject: Project | undefined;

  constructor() { 
    this.actions = undefined;
    this.experience = undefined;
    this.logoPattern = '';
    this.selectedProject = undefined;
    this.config = {
      pagination: { 
        el: '.swiper-pagination', 
        clickable: true 
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 30
    };
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
