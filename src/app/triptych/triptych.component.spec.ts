import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriptychComponent } from './triptych.component';

describe('TriptychComponent', () => {
  let component: TriptychComponent;
  let fixture: ComponentFixture<TriptychComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TriptychComponent]
    });
    fixture = TestBed.createComponent(TriptychComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
