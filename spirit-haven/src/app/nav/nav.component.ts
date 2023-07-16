import { Component } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  memberAuth = {
    active: true,
  };

  menuOpen(menuTrigger: MatMenuTrigger, arr: MatMenuTrigger[]) {
    if (!menuTrigger.menuOpen) {
      for (const trigger of arr) {
        if (trigger !== menuTrigger) {
          trigger.closeMenu();
        }
      }
      setTimeout(() => menuTrigger.openMenu(), 100);
    }
  }

  menuClose(menuTrigger: MatMenuTrigger) {
    if (!menuTrigger.menuOpen) {
      menuTrigger.closeMenu();
    }
  }
}
