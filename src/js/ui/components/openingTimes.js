var React = require('react');

module.exports = React.createClass({

  render: function() { 
    var times;
    var data = this.props.data;
    
    for (var prop in data) {
      let day;
      switch (prop) {
        case "sun":
          day = "Sunday";
          break;
        case "mon":
          day = "Monday";
          break;
        case "tue":
          day = "Tuesday";
          break;
        case "wed":
          day = "Wednesday";
          break;
        case "thu":
          day = "Thursday";
          break;
        case "fri":
          day = "Friday";
          break;
        case "sat":
          day = "Saturday";
          break;
      }
      times += day + " ";

      if(data[prop]) {
        times += data[prop].from + " " + data[prop].to;
      }
    }

    return (
      <div className="openingTimes">
        {times}
      </div>
    );    
  },
});

