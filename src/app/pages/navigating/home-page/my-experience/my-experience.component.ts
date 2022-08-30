import { Component, OnInit } from '@angular/core';
import { Company, Experience } from 'src/app/models/company.model';
import { Footstep } from 'src/app/models/footstep.model';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-my-experience',
  templateUrl: './my-experience.component.html',
  styleUrls: ['./my-experience.component.scss']
})
export class MyExperienceComponent implements OnInit {

  footsteps: Footstep[];
  experience: Experience[];
  selectedExperience: Experience | undefined;

  constructor(private experienceService: ExperienceService) { 
    
    this.footsteps = [
      {x: '52%', y:'4%'},
      {x: '53%', y:'9%'},
      {x: '56%', y:'8%'},
      {x: '64%', y:'18%'},
      {x: '67%', y:'16%'},
      {x: '68%', y:'22%', transform: 'rotate(8deg)'},
      {x: '71%', y:'19%', transform: 'rotate(18deg)'},
      {x: '74%', y:'24%', transform: 'rotate(27deg)'},
      {x: '76%', y:'20%', transform: 'rotate(30deg)'},
      {x: '79%', y:'23%', transform: 'rotate(42deg)'},
      {x: '80%', y:'29%', transform: 'rotate(244deg)'},
      {x: '83%', y:'30%', transform: 'rotate(245deg)'},
      {x: '80%', y:'34%', transform: 'rotate(236deg)'},
      {x: '77%', y:'31%', transform: 'rotate(225deg)'},
      {x: '76%', y:'36%', transform: 'rotate(210deg)'},
      {x: '66%', y:'36%', transform: 'rotate(192deg)'},
      {x: '64%', y:'39%', transform: 'rotate(192deg)'},
      {x: '61%', y:'34%', transform: 'rotate(208deg)'},
      {x: '60%', y:'39%', transform: 'rotate(210deg)'},
      {x: '57%', y:'36%', transform: 'rotate(230deg)'},
      {x: '56%', y:'41%', transform: 'rotate(234deg)'},
      {x: '37%', y:'48%', transform: 'rotate(208deg)'},
      {x: '34%', y:'45%', transform: 'rotate(210deg)'},
      {x: '31%', y:'49%', transform: 'rotate(217deg)'},
      {x: '28%', y:'46%', transform: 'rotate(218deg)'},
      {x: '26%', y:'51%', transform: 'rotate(226deg)'},
      {x: '26%', y:'58%', transform: 'rotate(8deg)'},
      {x: '28%', y:'64%', transform: 'rotate(18deg)'},
      {x: '32%', y:'61%', transform: 'rotate(18deg)'},
      {x: '34%', y:'67%', transform: 'rotate(22deg)'},
      {x: '37%', y:'63%', transform: 'rotate(26deg)'},
      {x: '39%', y:'68%', transform: 'rotate(26deg)'},
    ];
    this.footsteps = this.setStartEnd(0.5, 3.5,0.5,this.footsteps);
    this.experience = [];
    this.selectedExperience = undefined;
  }

  ngOnInit(): void {
    this.experienceService.getExperience().subscribe((data:Experience[]) => {
      this.experience = data;
    });
  }

  setStartEnd(startingPoint: number, endingPoint: number, increment: number, footsteps: Footstep[]):  Footstep[] {
    return footsteps.map(f => {
      f.startEnd=startingPoint+'s, '+endingPoint+'s';
      startingPoint+=increment;
      endingPoint+=increment;
      return f;
    });
  }

  open(name: string) {
    this.selectedExperience = this.experience.find(e => {
      if(e.company.name === name) {
        return e;
      }
      return undefined;
    });
  }

  

}
