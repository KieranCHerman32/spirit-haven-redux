import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewportService {
  // Everything in this service is some of the messiest code I have ever written //
  // and that includes my first year in the industry. //
  // I apologize to everyone who will work on this codebase. //

  // In case it isn't clear, I don't like using Block Comments. //

  currentScreenSize = '';
  currentScreenLayout = '';
  navOffset: string = '0';
  footerOffset: string = '0';
  viewportOffset: string = '0';
  mobileNav: boolean = false;

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
  mobileBreakpoints = [
    'XSmall',
    'Small',
    'Medium',
    'Handset',
    'HandsetPortrait',
    'HandsetLandscape',
    'Tablet',
    'TabletPortrait',
    'TabletLandscape',
  ];

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'], //  (max-width: 599.98px)
    [Breakpoints.Small, 'Small'], //  (min-width: 600px) and (max-width: 959.98px)
    [Breakpoints.Medium, 'Medium'], //  (min-width: 960px) and (max-width: 1279.98px)
    [Breakpoints.Large, 'Large'], //  (min-width: 1280px) and (max-width: 1919.98px)
    [Breakpoints.XLarge, 'XLarge'], //  (min-width: 1920px)
    [Breakpoints.Handset, 'Handset'], //  (max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)
    [Breakpoints.Tablet, 'Tablet'], //  (min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)
    [Breakpoints.Web, 'Web'], //  (min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)
    // TODO: Determine utility of breakpoints below this comment //
    [Breakpoints.HandsetPortrait, 'HandsetPortrait'], //  (max-width: 599.98px) and (orientation: portrait)
    [Breakpoints.TabletPortrait, 'TabletPortrait'], //  (min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)
    [Breakpoints.WebPortrait, 'WebPortrait'], //  (min-width: 840px) and (orientation: portrait)
    [Breakpoints.HandsetLandscape, 'HandsetLandscape'], //  (max-width: 959.98px) and (orientation: landscape)
    [Breakpoints.TabletLandscape, 'TabletLandscape'], //  (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)
    [Breakpoints.WebLandscape, 'WebLandscape'], //  (min-width: 1280px) and (orientation: landscape)
  ]);

  constructor(public breakpointObserver: BreakpointObserver) {}

  async load() {
    // console.log('Load method');
    this.getLayoutChange();
    this.getBreakpointChange();
    // this.log();
  }

  log() {
    console.log('Current Screen Size', this.currentScreenSize);
    console.log('Current Screen Layout', this.currentScreenLayout);
  }

  getLayoutChange() {
    this.breakpointObserver
      .observe(this.layouts)
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            if (this.currentScreenLayout != query) {
              this.currentScreenLayout = query
                // TODO: Regex to pull orientation value from string
                .replace('(', '')
                .replace('orientation: ', '')
                .replace(')', '');
              this.getMobileNav();
              // this.log();
            }
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
          if (
            result.breakpoints[query] &&
            this.currentScreenSize != this.displayNameMap.get(query)
          ) {
            this.currentScreenSize =
              this.displayNameMap.get(query) ?? 'Unknown';
            this.getMobileNav();
            // this.log();
          }
        }
      });
  }

  getNavOffset() {
    const offset = document
      .querySelector('mat-toolbar')
      ?.getBoundingClientRect().height!;
    this.navOffset =
      this.navOffset !== String(offset) ? String(offset) : this.navOffset;

    this.getFooterOffset();
  }

  getFooterOffset() {
    const offset = document
      .querySelector('app-footer mat-toolbar')
      ?.getBoundingClientRect().height!;
    this.footerOffset =
      this.footerOffset !== String(offset) ? String(offset) : this.footerOffset;

    this.getViewportOffset();
  }

  getViewportOffset() {
    const offset =
      this.navOffset && this.footerOffset
        ? this.navOffset + this.footerOffset
        : this.navOffset || this.footerOffset;
    this.viewportOffset =
      this.viewportOffset !== offset ? offset : this.viewportOffset;

    const sideNav = document.querySelector(
      '.mat-drawer-inner-container'
    ) as HTMLElement;

    if (sideNav) {
      console.log(sideNav);
      console.log(this.footerOffset);
      sideNav.style.color = 'hotpink';
      sideNav.style.padding = `1rem 1rem ${this.footerOffset}px 1rem`;
    }
  }

  getMobileNav() {
    const mobileNav = this.mobileBreakpoints.includes(this.currentScreenSize);
    this.mobileNav = mobileNav;
    if (this.mobileNav == true) {
      this.getNavOffset();
    }
  }
}
