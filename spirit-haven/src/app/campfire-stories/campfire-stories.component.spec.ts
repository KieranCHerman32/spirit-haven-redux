import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampfireStoriesComponent } from './campfire-stories.component';

describe('CampfireStoriesComponent', () => {
  let component: CampfireStoriesComponent;
  let fixture: ComponentFixture<CampfireStoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampfireStoriesComponent]
    });
    fixture = TestBed.createComponent(CampfireStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
