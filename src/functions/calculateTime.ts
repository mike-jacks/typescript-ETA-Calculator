export function calculateTime(time: number, isHours: boolean): string {
  let hours: number;
  let minutes: number;
  let seconds: number;
  if (isHours) {
    hours = Math.floor(time);
    minutes = Math.floor((time - hours) * 60);
    seconds = Math.floor(((time - hours) * 60 - minutes) * 60);
  } else {
    hours = Math.floor(time / 3600);
    minutes = Math.floor((time % 3600) / 60);
    seconds = Math.floor(time % 60);
  }
  const results = `${hours} ${hours === 1 ? "hour" : "hours"}, ${minutes} ${minutes === 1 ? "minute" : "minutes"}, ${seconds} ${
    seconds === 1 ? "second" : "seconds"
  }.`;
  return results;
}
