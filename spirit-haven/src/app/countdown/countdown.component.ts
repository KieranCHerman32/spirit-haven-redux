import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID } from '@angular/core';
import { Observable, interval, map, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TimeComponents, calcDateDiff } from './Countdown';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent {
  public timeLeft$: Observable<TimeComponents>;
  festival: any = environment.next_festival;

  constructor(@Inject(LOCALE_ID) public locale: string) {
    this.timeLeft$ = interval(1000).pipe(
      map((x) =>
        calcDateDiff(
          new Date(
            formatDate(
              this.festival.start_date,
              'y, M, d, hh:mm:ss',
              this.locale
            )
          )
        )
      ),
      shareReplay(1)
    );
  }

  festivalDates() {
    let start = this.festival.start_date;
    start = formatDate(start, 'MMMM d', this.locale);
    let end = this.festival.end_date;
    end = formatDate(end, 'd', this.locale);
    return `${start} - ${end}`;
  }
}
