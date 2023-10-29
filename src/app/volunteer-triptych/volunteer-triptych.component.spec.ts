import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerTriptychComponent } from './volunteer-triptych.component';

describe('VolunteerTriptychComponent', () => {
  let component: VolunteerTriptychComponent;
  let fixture: ComponentFixture<VolunteerTriptychComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolunteerTriptychComponent]
    });
    fixture = TestBed.createComponent(VolunteerTriptychComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
