import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberTriptychComponent } from './member-triptych.component';

describe('MemberTriptychComponent', () => {
  let component: MemberTriptychComponent;
  let fixture: ComponentFixture<MemberTriptychComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemberTriptychComponent]
    });
    fixture = TestBed.createComponent(MemberTriptychComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
