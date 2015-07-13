var _ = require('lodash');


/**
 * Parse opening times string into object.
 *
 * Example: `Mon-Fri:1100-1900,Sat:0600-2400`
 * 
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
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




