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



exports.generateWifiDescription = function(qualityLevel) {
  switch (qualityLevel) {
    case 0:
      return "WiFi is usually not available in this cafe, unless it's your lucky day. In fact why is this cafe even on here!?";
    case 1:
      return "WiFi is very unreliable. Expect extremely slow speeds and frequent disconnections. The only thing missing is the dialup internet connection tone.";
    case 2:
      return "WiFi is sluggish, with speed often crawling to a drag accompanied by frequent disconnections. It gets your hopes up and then brings you down again. Bring a stress ball with you.";
    case 3:
      return "WiFi is ok, with speed sometimes slowing drag amid occasional disconnections. You should be able to get some work done.";
    case 4:
      return "WiFi signal is strong, and the speed is reasonably consistent. Occasionally you may experience disconnections but these are mere flesh wounds.";
    case 5:
      return "WiFi signal is excellent with disconnections being rare. Excellent speed internet with very few reliability problems. Why not try a torrent? :)";
  }
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

  var hasValue = false;

  while(null !== (match = re.exec(str))) {
    hasValue = true;

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

  return (hasValue) ? ret : null;
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

    if (!isNaN(cost)) {
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

/**
 * Parse affordability string into object.
 *
 * Example: `120/?/200`
 */
exports.getRatingFromPrice = function(num) {
  if(num <= 60) {
    return 5;
  } else if(num <= 100) {
    return 4;
  } else if(num <= 150) {
    return 3;
  } else if(num <= 200) {
    return 2;
  } else {
    return 1;
  }
}




