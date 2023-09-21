export interface TimeComponents {
  secondsToEnd: string;
  minutesToEnd: string;
  hoursToEnd: string;
  daysToEnd: string;
}

export function calcDateDiff(end: Date = new Date(2022, 0, 1)): TimeComponents {
  const countdownEnd = end.valueOf();

  const milliSecondsInASecond = 1000;
  const hoursInADay = 24;
  const minutesInAnHour = 60;
  const secondsInAMinute = 60;

  const timeDifference = countdownEnd - Date.now();

  const daysToEnd = Math.floor(
    timeDifference /
      (milliSecondsInASecond * minutesInAnHour * secondsInAMinute * hoursInADay)
  )
    .toString()
    .padStart(2, '0');

  const hoursToEnd = Math.floor(
    (timeDifference /
      (milliSecondsInASecond * minutesInAnHour * secondsInAMinute)) %
      hoursInADay
  )
    .toString()
    .padStart(2, '0');

  const minutesToEnd = Math.floor(
    (timeDifference / (milliSecondsInASecond * minutesInAnHour)) %
      secondsInAMinute
  )
    .toString()
    .padStart(2, '0');

  const secondsToEnd = (
    Math.floor(timeDifference / milliSecondsInASecond) % secondsInAMinute
  )
    .toString()
    .padStart(2, '0');

  return { secondsToEnd, minutesToEnd, hoursToEnd, daysToEnd };
}
