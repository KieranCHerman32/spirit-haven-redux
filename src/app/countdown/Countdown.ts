import { TimelineComponent } from '../timeline/timeline.component';

export interface TimeComponents {
  seconds_remaining: string | number;
  minutes_remaining: string | number;
  hours_remaining: string | number;
  days_remaining: string | number;
}

export function calcDateDiff(end: Date = new Date(2022, 0, 1)): TimeComponents {
  const countdownEnd = end.valueOf();

  const ms_in_s = 1000;
  const hrs_in_day = 24;
  const mins_in_hr = 60;
  const secs_in_min = 60;

  const time_diff = countdownEnd - Date.now();

  let days_remaining: string | number = Math.floor(
    time_diff / (ms_in_s * mins_in_hr * secs_in_min * hrs_in_day)
  );

  let hours_remaining: string | number = Math.floor(
    (time_diff / (ms_in_s * mins_in_hr * secs_in_min)) % hrs_in_day
  );

  let minutes_remaining: string | number = Math.floor(
    (time_diff / (ms_in_s * mins_in_hr)) % secs_in_min
  );

  let seconds_remaining: string | number =
    Math.floor(time_diff / ms_in_s) % secs_in_min;

  days_remaining = (days_remaining > 0 ? days_remaining : '0')
    .toString()
    .padStart(2, '0');
  hours_remaining = (hours_remaining > 0 ? hours_remaining : '0')
    .toString()
    .padStart(2, '0');
  minutes_remaining = (minutes_remaining > 0 ? minutes_remaining : '0')
    .toString()
    .padStart(2, '0');
  seconds_remaining = (seconds_remaining > 0 ? seconds_remaining : '0')
    .toString()
    .padStart(2, '0');

  return {
    seconds_remaining,
    minutes_remaining,
    hours_remaining,
    days_remaining,
  };
}
