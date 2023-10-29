import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSetComponent } from './panel-set.component';

describe('PanelSetComponent', () => {
  let component: PanelSetComponent;
  let fixture: ComponentFixture<PanelSetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelSetComponent]
    });
    fixture = TestBed.createComponent(PanelSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
