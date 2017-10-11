import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningGameComponent } from './planning-game.component';

describe('PlanningGameComponent', () => {
  let component: PlanningGameComponent;
  let fixture: ComponentFixture<PlanningGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
