function pad(number, size) {
  let s = String(number);
  while (s.length < (size || 2)) {
    s = `0${s}`;
  }
  return s;
}

function formatStopwatchFromMilliseconds(timeInMillis) {
  const hours = pad(Math.floor(timeInMillis / 3600000));
  const minutes = pad(Math.floor((timeInMillis % 3600000) / 60000));
  const seconds = pad(Math.floor((timeInMillis % 60000) / 1000));
  const milliseconds = pad(Math.floor(timeInMillis % 1000));

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds, 3)}`.slice(0, -2);
}

export { formatStopwatchFromMilliseconds, pad };
