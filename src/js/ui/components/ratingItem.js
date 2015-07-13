var React = require('react');

var Star = require('./stars');

module.exports = React.createClass({

  render: function() {
    var rating;
    var value = this.props.value;
    if(typeof value=== "number") {
      rating = <Star rating={value} />
    } else if(typeof value === "string") {
      if(value.slice(0, 4) === "http") {
        rating = <a href={value}>{value}</a>
      } else {
        rating = <p>{value}</p>
      }
    } else if(typeof value === "boolean") {
      if(value === true) {
        rating = <p class="boolean">Yes</p>
      } else {
        rating = <p class="boolean">No</p>
      }
    }
    return (
      <div className="rating-item">
        <h3 class="rating-item-title">{this.props.title}</h3>
        <div className="rating-item-value">
          {rating}
        </div>
      </div>
    );    
  },
});



