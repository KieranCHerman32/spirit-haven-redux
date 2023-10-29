import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurnBannerComponent } from './burn-banner.component';

describe('BurnBannerComponent', () => {
  let component: BurnBannerComponent;
  let fixture: ComponentFixture<BurnBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BurnBannerComponent]
    });
    fixture = TestBed.createComponent(BurnBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
