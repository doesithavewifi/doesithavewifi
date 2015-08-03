var React = require('react');

var Star = require('./stars'),
  UnknownValue = require('./unknownValue');


module.exports = React.createClass({

  render: function() {
    var rating;
    var value = this.props.value;

    switch(typeof value) {
      case 'number':
        rating = <Star rating={value} />;
        break;
      case 'string':
        if(value.slice(0, 4) === "http") {
          rating = <a href={value}>{value}</a>;
        } else if (value.length) {
          rating = <p>{value}</p>;
        } else {
          rating = <UnknownValue />;
        }
        break;
      case 'boolean':
        rating = <p className={`boolean ${value ? 'yes': 'no' }`}>{value ? 'Yes': 'No' }</p>;
        break;
      default:
        rating = <UnknownValue />;
    }
    return (
      <div className="rating-item">
        <h3 class="rating-item-title">{this.props.title}</h3>
        <div className="rating-item-value">
          {rating}
        </div>
      </div>
    );    
  }
});



