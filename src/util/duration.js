'use strict';

var timeNames = [
  { n: ['second', 'seconds'], m: 1 },
  { n: ['minute', 'minutes'], m: 60 },
  { n: ['hour', 'hours'], m: 60 },
  { n: ['day', 'days'], m: 24 },
  { n: ['month', 'months'], m: 30.5 },
  { n: ['year', 'years'], m: 12 },
  { n: ['century', 'centuries'], m: 100 },
  { n: ['thousand years', 'thousands of years'], m: 10 },
  { n: ['million years', 'millions of years'], m: 1000 },
  { n: ['billion years', 'billions of years'], m: 1000 },
  { n: ['trillion years', 'trillions of years'], m: 1000 },
  { n: ['quadrillion years', 'quadrillions of years'], m: 1000 },
  { n: ['quintillion years', 'quintillions of years'], m: 1000 },
  { n: ['sextillion years', 'sextillions of years'], m: 1000 },
  { n: ['septillion years', 'septillions of years'], m: 1000 },
  { n: ['octillion years', 'octillions of years'], m: 1000 },
  { n: ['nonillion years', 'nonillions of years'], m: 1000 },
  { n: ['decillion years', 'decillions of years'], m: 1000 }
];

function formatDuration(seconds) {
  var current = seconds;
  for (var index = 0; index < timeNames.length; index++) {
    var timeName = timeNames[index];

    current /= timeName.m;

    if (!timeNames[index + 1] || current / timeNames[index + 1].m < 1) {
      var roundedCurrent = Math.round(current);

      return (
        '~' + roundedCurrent + ' ' + timeName.n[roundedCurrent === 1 ? 0 : 1]
      );
    }
  }
}

module.exports = formatDuration;
