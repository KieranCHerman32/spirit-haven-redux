import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-burn-banner',
  templateUrl: './burn-banner.component.html',
  styleUrls: ['./burn-banner.component.scss'],
})
export class BurnBannerComponent {
  env = environment;

  constructor(@Inject(LOCALE_ID) public locale: string) {}

  formatStr() {
    let banStr = `${this.env.burn_ban_duration} day burn ban in effect in ${
      this.env.burn_ban_locale
    } as of ${this.formatDate(this.env.burn_ban_start_date)}`;

    return banStr.toUpperCase();
  }

  formatDate(date: any) {
    return formatDate(date, 'M/dd/yyyy', this.locale);
  }
}
