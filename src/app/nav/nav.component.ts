import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  inject,
} from '@angular/core';
import { environment } from 'src/environments/environment';
import { DropdownService } from '../services/dropdown.service';
import { ViewportService } from '../services/viewport.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements AfterViewInit, AfterViewChecked {
  env = environment;
  viewportService = inject(ViewportService);
  dropdownService = inject(DropdownService);

  sideNavActive: boolean = false;

  constructor() {}

  ngAfterViewInit(): void {
    this.dropdownLayoutToggle();
  }

  ngAfterViewChecked(): void {
    this.dropdownLayoutToggle();
  }

  dropdownLayoutToggle() {
    if (!this.viewportService.mobileNav) {
      this.dropdownService.getDropdownList();
    }
  }

  hover() {
    if (!this.viewportService.mobileNav) {
      this.dropdownService.hover();
    }
  }

  closeAll() {
    if (!this.viewportService.mobileNav) {
      this.dropdownService.closeAll();
    }
  }
}
