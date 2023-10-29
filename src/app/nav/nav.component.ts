import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  env = environment;
  memberAuth: any;

  hoverList!: NodeListOf<Element>;
  dropdownElementList!: NodeListOf<Element>;
  dropdownInstanceList!: bootstrap.Dropdown[];
  communityDropdown!: bootstrap.Dropdown;
  festivalDropdown!: bootstrap.Dropdown;
  ranchDropdown!: bootstrap.Dropdown;

  ngOnInit(): void {
    const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
    const dropdownList = [...dropdownElementList].map((dropdownToggleEl) => {
      this.dropdownInit(dropdownToggleEl);
    });
  }

  dropdownInit(element: Element) {
    const id = element.id;
    // TODO: Find a cleaner way to implement this.
    switch (id) {
      case 'community':
        this.communityDropdown =
          bootstrap.Dropdown.getOrCreateInstance(element);
        break;
      case 'festival':
        this.festivalDropdown = bootstrap.Dropdown.getOrCreateInstance(element);
        break;
      case 'ranch':
        this.ranchDropdown = bootstrap.Dropdown.getOrCreateInstance(element);
        break;
      default:
        break;
    }

    if (this.communityDropdown && this.festivalDropdown && this.ranchDropdown) {
      this.dropdownInstanceList = [
        this.communityDropdown,
        this.festivalDropdown,
        this.ranchDropdown,
      ];

      this.hoverList = document.querySelectorAll(
        '.btn, .dropdown-toggle, .dropdown-menu, .dropdown-header, .dropdown-item'
      );
    }
  }

  selectInstance(id: string) {
    switch (id) {
      case 'community':
        return this.communityDropdown;
      case 'festival':
        return this.festivalDropdown;
      case 'ranch':
        return this.ranchDropdown;
      default:
        return;
    }
  }

  openDropdown(id: string) {
    this.closeAll(id);
    const el = this.selectInstance(id);
    el?.show();
  }

  closeDropdown(id: string) {
    const el = this.selectInstance(id);
    el?.hide();
  }

  closeAll(excludeId?: string) {
    this.dropdownInstanceList.forEach((dropdown) => {
      if (!excludeId || dropdown != this.selectInstance(excludeId)) {
        dropdown.hide();
      }
    });
  }

  hover() {
    let hover: boolean = false;
    this.hoverList.forEach((el) => {
      if (el.matches(':hover')) {
        hover = true;
      }
    });

    if (!hover) {
      this.closeAll();
    }
  }
}
