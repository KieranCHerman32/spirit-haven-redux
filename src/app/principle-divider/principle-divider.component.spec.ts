import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleDividerComponent } from './principle-divider.component';

describe('PrincipleDividerComponent', () => {
  let component: PrincipleDividerComponent;
  let fixture: ComponentFixture<PrincipleDividerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipleDividerComponent]
    });
    fixture = TestBed.createComponent(PrincipleDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
