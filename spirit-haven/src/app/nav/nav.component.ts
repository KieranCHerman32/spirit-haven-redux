import { Component, QueryList, ViewChildren } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  env = environment;
  memberAuth: any;

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
