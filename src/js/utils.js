var _ = require('lodash');


exports.slugify = function(str) {
  str = (str || '').toLowerCase();

  // Affordability:blabla -> Affordability
  var colonPos = str.indexOf(':');
  if (0 < colonPos) {
    str = str.substr(0, colonPos);
  }

  // Opening times (normal) -> opening_times_normal_
  str = str.replace(/[\s\(\)/\/\:\,]+/g, '_');

  return str;
};



exports.parseClosestStation = function(str) {  
  var ret = {
    original: str,
  };

  var matches = (str || '').match(/([^,]+)([\s,]+([^,]+))?/i);

  if (!matches || 1 > matches.length) {
    return ret;
  }

  ret.station = matches[1];

  if (2 < matches.length) {
    ret.exit = matches.pop();
  }

  return ret;
};




/**
 * Parse opening times string into object.
 *
 * Example: `Mon-Fri:1100-1900,Sat:0600-2400`
 */
exports.parseOpeningTimes = function(str) {
  var daysInWeek = [
    'mon',
    'tue',
    'wed',
    'thu',
    'fri',
    'sat',
    'sun'
  ];

  var ret = {};

  daysInWeek.forEach(function(dayName) {
    ret[dayName] = null;
  });

  str = (str || '').toLowerCase();

  var re = /([a-z]{3}(\-[a-z]{3})?):(\d{4}\-\d{4})/ig,
    match;

  while(null !== (match = re.exec(str))) {
    var days = match[1].match(/[a-z]{3}/ig),
      times = match.pop().match(/\d{4}/ig);

    var day1 = days[0], day2 = days[1];

    var startTime = times[0], endTime = times[1];

    ret[day1] = {
      from: startTime,
      to: endTime,
    };

    if (day2) {
      var startDayIndex = _.indexOf(daysInWeek, day1),
        endDayIndex = _.indexOf(daysInWeek, day2),
        currentDayIndex = startDayIndex;

      while ( endDayIndex >= ++currentDayIndex && daysInWeek.length > currentDayIndex) {
        ret[daysInWeek[currentDayIndex]] = {
          from: startTime,
          to: endTime
        };
      }
    }
  };

  return ret;
};




/**
 * Parse affordability string into object.
 *
 * Example: `120/?/200`
 */
exports.parseAffordability = function(str) {
  str = (str || '').toLowerCase();

  var values = str.split('/').map((v) => v.trim());

  var drinkTypes = ['Latte', 'Tea', 'Hot chocolate'];

  var ret = {};

  drinkTypes.forEach(function(drinkType, index) {
    var cost = parseInt(values[index] || null);

    if (!Number.isNaN(cost)) {
      ret[drinkType] = cost;
    }
  });

  var availableDrinkTypes = Object.keys(ret);

  if (availableDrinkTypes.length) {
    var total = 0;

    availableDrinkTypes.forEach(function(drinkType) {
      total += ret[drinkType];
    });

    ret.avge = parseInt(
      Math.round(total * 1.0 / (availableDrinkTypes.length))
    );
  }

  return ret;
};




