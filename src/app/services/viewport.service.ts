import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewportService {
  currentScreenSize!: string;
  currentScreenLayout!: string;
  navOffset: number = 0;
  footerOffset: number = 0;
  viewportOffset: number = 0;

  destroyed = new Subject<void>();

  breakpoints = [
    Breakpoints.XSmall,
    Breakpoints.Small,
    Breakpoints.Medium,
    Breakpoints.Large,
    Breakpoints.XLarge,
    Breakpoints.Handset,
    Breakpoints.Tablet,
    Breakpoints.Web,
    Breakpoints.HandsetPortrait,
    Breakpoints.TabletPortrait,
    Breakpoints.WebPortrait,
    Breakpoints.HandsetLandscape,
    Breakpoints.TabletLandscape,
    Breakpoints.WebLandscape,
  ];

  layouts = ['(orientation: portrait)', '(orientation: landscape)'];

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'], //  (max-width: 599.98px)
    [Breakpoints.Small, 'Small'], //  (min-width: 600px) and (max-width: 959.98px)
    [Breakpoints.Medium, 'Medium'], //  (min-width: 960px) and (max-width: 1279.98px)
    [Breakpoints.Large, 'Large'], //  (min-width: 1280px) and (max-width: 1919.98px)
    [Breakpoints.XLarge, 'XLarge'], //  (min-width: 1920px)
    [Breakpoints.Handset, 'Handset'], //  (max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)
    [Breakpoints.Tablet, 'Tablet'], //  (min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)
    [Breakpoints.Web, 'Web'], //  (min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)
    [Breakpoints.HandsetPortrait, 'HandsetPortrait'], //  (max-width: 599.98px) and (orientation: portrait)
    [Breakpoints.TabletPortrait, 'TabletPortrait'], //  (min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)
    [Breakpoints.WebPortrait, 'WebPortrait'], //  (min-width: 840px) and (orientation: portrait)
    [Breakpoints.HandsetLandscape, 'HandsetLandscape'], //  (max-width: 959.98px) and (orientation: landscape)
    [Breakpoints.TabletLandscape, 'TabletLandscape'], //  (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)
    [Breakpoints.WebLandscape, 'WebLandscape'], //  (min-width: 1280px) and (orientation: landscape)
  ]);

  constructor(public breakpointObserver: BreakpointObserver) {}

  getLayoutChange() {
    this.breakpointObserver
      .observe(this.layouts)
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenLayout = query
              .replace('(', '')
              .replace('orientation: ', '')
              .replace(')', '');
          }
        }
      });
  }

  getBreakpointChange() {
    this.breakpointObserver
      .observe(this.breakpoints)
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize =
              this.displayNameMap.get(query) ?? 'Unknown';
            this.getNavOffset();
            this.getFooterOffset();
            this.getViewportOffset();
          }
        }
      });
  }

  getNavOffset() {
    // console.log(`Nav Offset: ${this.navOffset}`);
    const offset = document
      .querySelector('mat-toolbar')
      ?.getBoundingClientRect().height!;
    // console.log(`Offset Value: ${offset}`);
    this.navOffset = this.navOffset !== offset ? offset : this.navOffset;
    // console.log(`New Nav Offset: ${this.navOffset}`);
  }

  getFooterOffset() {
    // console.log(`Footer Offset: ${this.footerOffset}`);
    const offset = document
      .querySelector('app-footer mat-toolbar')
      ?.getBoundingClientRect().height!;
    // console.log(`Offset Value: ${offset}`);
    this.footerOffset =
      this.footerOffset !== offset ? offset : this.footerOffset;
    // console.log(`New Footer Offset: ${this.footerOffset}`);
  }

  getViewportOffset() {
    // console.log(`Viewport Offset: ${this.viewportOffset}`);
    const offset =
      this.navOffset && this.footerOffset
        ? this.navOffset + this.footerOffset
        : this.navOffset || this.footerOffset;
    // console.log(`Offset Value: ${offset}`);
    this.viewportOffset =
      this.viewportOffset !== offset ? offset : this.viewportOffset;
    // console.log(`New Viewport Offset: ${this.viewportOffset}`);
  }

  offsetString() {
    return window.innerHeight - this.viewportOffset;
  }
}
