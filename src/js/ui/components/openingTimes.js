var React = require('react');
var _ = require('lodash');

module.exports = React.createClass({

  render: function() { 
    var data = this.props.data;

    var times = _.map(data, function(val, key){
      let day;
      let time;

      switch (key) {
        case "sun":
          day = "Sunday:";
          break;
        case "mon":
          day = "Monday:";
          break;
        case "tue":
          day = "Tuesday:";
          break;
        case "wed":
          day = "Wednesday:";
          break;
        case "thu":
          day = "Thursday:";
          break;
        case "fri":
          day = "Friday:";
          break;
        case "sat":
          day = "Saturday:";
          break;
      }

      if(data[key]) {
        time = <div className="time">{data[key].from} - {data[key].to}</div>
      } else {
        time = <div className="time">Closed</div>
      }

      return (
        <div className="day" key={key}>
          <div className="day-name">{day}</div>
          {time}
        </div>
      )
    });

    return (
      <div className="opening-times">
        {times}
      </div>
    );    
  },
});

