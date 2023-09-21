export interface TimeComponents {
  secondsToEnd: number;
  minutesToEnd: number;
  hoursToEnd: number;
  daysToEnd: number;
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
  );

  const hoursToEnd = Math.floor(
    (timeDifference /
      (milliSecondsInASecond * minutesInAnHour * secondsInAMinute)) %
      hoursInADay
  );

  const minutesToEnd = Math.floor(
    (timeDifference / (milliSecondsInASecond * minutesInAnHour)) %
      secondsInAMinute
  );

  const secondsToEnd =
    Math.floor(timeDifference / milliSecondsInASecond) % secondsInAMinute;

  return { secondsToEnd, minutesToEnd, hoursToEnd, daysToEnd };
}
