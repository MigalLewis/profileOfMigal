import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyExperienceComponent } from './my-experience.component';

describe('MyExperienceComponent', () => {
  let component: MyExperienceComponent;
  let fixture: ComponentFixture<MyExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when setStartEnd is called', () => {

    describe('and has one footstep', () => {
      it('should create', () => {
        expect(component.setStartEnd(0.5,3.5,0.5,[{x: '10', y: '20'}])).toEqual(
          [{x: '10', y: '20', startEnd: '0.5s, 3.5s'}]
        );
      });
    });

    describe('and has multiple footsteps', () => {
      it('should create', () => {
        expect(component.setStartEnd(0.5,3.5,0.5,[
          {x: '10', y: '20'},
          {x: '10', y: '30'},
          {x: '10', y: '40'},
          {x: '10', y: '50'}])).toEqual(
          [
            {x: '10', y: '20', startEnd: '0.5s, 3.5s'},
            {x: '10', y: '30', startEnd: '1s, 4s'},
            {x: '10', y: '40', startEnd: '1.5s, 4.5s'},
            {x: '10', y: '50', startEnd: '2s, 5s'},
          ]);
      });
    }

  });
});
