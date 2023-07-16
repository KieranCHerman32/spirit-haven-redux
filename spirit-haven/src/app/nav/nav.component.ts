import { Component, QueryList, ViewChildren } from '@angular/core';
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

  @ViewChildren(MatMenuTrigger)
  triggerArr!: QueryList<MatMenuTrigger>;

  menuOpen(menuTrigger: MatMenuTrigger) {
    if (!menuTrigger.menuOpen) {
      this.menuCloseAll(menuTrigger);
      setTimeout(() => menuTrigger.openMenu(), 100);
    }
  }

  menuClose(menuTrigger: MatMenuTrigger) {
    if (!menuTrigger.menuOpen) {
      this.menuCloseAll(menuTrigger);
      menuTrigger.closeMenu();
    }
  }

  menuCloseAll(menuTrigger?: MatMenuTrigger) {
    for (const trigger of this.triggerArr) {
      if (!menuTrigger || trigger !== menuTrigger) {
        trigger.closeMenu();
      }
    }
  }
}
